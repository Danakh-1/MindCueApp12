// import * as React from 'react';
// import {SafeAreaView, View, Text} from 'react-native';
// import {Searchbar} from 'react-native-paper';
// import style from '../../components/style';
// import { useContext } from 'react';
// import {AuthContext} from '../../contexts/authContext';
// import  { useEffect } from 'react';

// function LogScreen({navigation}) {
//   const [searchQuery, setSearchQuery] = React.useState('');
//   const onChangeSearch = query => setSearchQuery(query);
//   return (
//     <SafeAreaView style={style.safeArea}>
//       <View>
//         <Searchbar
//           iconColor="#DC989A"
//           placeholderTextColor={'#DC989A'}
//           style={style.search}
//           placeholder="Search"
//           onChangeText={onChangeSearch}
//           value={searchQuery}
//         />
//         <Text style={style.recentActivity}>Recent Activity</Text>
//         <View style={style.logsContainer}>
//           <Text style={style.titleStyle}>MindCue demo v3</Text>
//           <Text style={style.linkStyle}>https://www.youtube.com/watch?v=uAXXqWFB_Es</Text>
//         </View>
//         <View style={style.logsContainer}>
//           <Text style={style.titleStyle}>MindCueKw channel</Text>
//           <Text style={style.linkStyle}>https://www.youtube.com/results?search_query=mindcue</Text>
//         </View>
//         <View style={style.logsContainer}>
//           <Text style={style.titleStyle}>Wound healing</Text>
//           <Text style={style.linkStyle}>https://dermnetnz.org/cme/wound-healing/normal-wound-healing</Text>
//         </View>
//         <Text style={style.seeMore}>See More</Text>

//         <Text style={style.recentActivity}>Recent Warnings</Text>
//         <View style={style.logsContainer}>
//           <Text style={style.titleStyle}>MindCue demo v3</Text>
//           <Text style={style.linkStyle}>Trigger detcted</Text>
//         </View>
//         <View style={style.logsContainer}>
//           <Text style={style.titleStyle}>MindCue demo v3</Text>
//           <Text style={style.linkStyle}>Sensor feedback</Text>
//         </View>
//         <View style={style.logsContainer}>
//           <Text style={style.titleStyle}>Wound healing</Text>
//           <Text style={style.linkStyle}>Trigger detected</Text>
//         </View>
//         <Text style={style.seeMore}>See More</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// export default LogScreen;

import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { AuthContext } from '../../contexts/authContext';
import style from '../../components/style';
import useApi from '../../hooks/api';

function LogScreen({ navigation }) {
  const { userData } = useContext(AuthContext);
  const { get } = useApi();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentActivity, setRecentActivity] = useState([]);
  const [sessionTriggers, setSessionTriggers] = useState([]);
  const [recentWarnings, setRecentWarnings] = useState([]);

  // Function to check if a string is a valid URL
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const fetchUrls = async () => {
    try {
      const res = await get(`tracks/user/${userData?.userId}/recent`);
      if (res.data) {
        parseUrls(res.data.urls);
      }
    } catch (error) {
      console.error('Error fetching urls:', error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const parseUrls = (urls) => {
    const recentActivity = [];
    const sessionTriggers = [];
    const recentWarnings = [];
    let currentSection = null;

    for (const url of urls) {
      if (url === "Session Triggers:") {
        currentSection = "sessionTriggers";
      } else if (url === "Alert Names:") {
        currentSection = "recentWarnings";
      } else {
        switch (currentSection) {
          case "sessionTriggers":
            sessionTriggers.push(url);
            break;
          case "recentWarnings":
            recentWarnings.push(url);
            break;
          default:
            recentActivity.push(url);
        }
      }
    }

    setRecentActivity(recentActivity);
    setSessionTriggers(sessionTriggers);
    setRecentWarnings(recentWarnings);
  };

  const renderItem = (item, section) => (
    <View style={style.logsContainer}>
      <Text style={style.titleStyle}>{section}</Text>
      <Text style={style.linkStyle}>{item}</Text>
    </View>
  );
  
  const renderRecentActivityItem = ({ item, index }) => {
    return renderItem(item, `Website ${index + 1}`);
  };
  
  const renderSessionTriggerItem = ({ item, index }) => {
    return renderItem(item, `Trigger ${index + 1}`);
  };
  
  const renderRecentWarningItem = ({ item, index }) => {
    return renderItem(item, `Alert ${index + 1}`);
  };
  
  return (
    <SafeAreaView style={style.safeArea}>
      <View>
        <Searchbar
          iconColor="#DC989A"
          placeholderTextColor={'#DC989A'}
          style={style.search}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        {recentActivity.length > 0 && (
          <>
            <Text style={style.recentActivity}>Recent Activity</Text>
            <FlatList
              data={recentActivity.slice(0, -1)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderRecentActivityItem}
            />
          </>
        )}
        {sessionTriggers.length > 0 && (
          <>
            <Text style={style.recentActivity}>Session Triggers</Text>
            <FlatList
              data={sessionTriggers.slice(0, -1)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderSessionTriggerItem}
            />
          </>
        )}
        {recentWarnings.length > 0 && (
          <>
            <Text style={style.recentActivity}>Recent Warnings</Text>
            <FlatList
              data={recentWarnings.slice(0)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderRecentWarningItem}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
  
  
}

export default LogScreen;
