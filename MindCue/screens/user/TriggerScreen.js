import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {BASEURL} from '../../IP';
import useApi from '../../hooks/api';
import {AuthContext} from '../../contexts/authContext';
import style from '../../components/style';

function TriggerScreen({navigation}) {
  const [spider, setSpider] = React.useState(false);
  const [wound, setWound] = React.useState(false);
  const [gun, setGun] = React.useState(false);
  const [cockroach, setCockroach] = React.useState(false);
  const [soldier, setSoldier] = React.useState(false);
  const [accident, setAccident] = React.useState(false);

  const [inputText, setInputText] = React.useState('');
  const [list, setList] = React.useState([]);
  const [triggers, setTriggers] = React.useState([]);
  const {get, post, del} = useApi();
  const {userData} = useContext(AuthContext);
  const handleCheckboxChange = async (name, isChecked) => {
    try {
      // Toggle local state
      switch (name) {
        case 'spider':
          setSpider(isChecked);
          break;
        case 'wound':
          setWound(isChecked);
          break;
        case 'gun':
          setGun(isChecked);
          break;
        case 'cockroach':
          setCockroach(isChecked);
          break;
        case 'soldier':
          setSoldier(isChecked);
          break;
        case 'accident':
          setAccident(isChecked);
          break;
        default:
          break;
      }
  
      // Save to database
      if (isChecked) {
        await addTrigger(name);
      } else {
        const trigger = triggers.find(item => item.name === name);
        if (trigger) {
          await deleteTrigger(trigger.id);
        }
      }
      
      // Fetch updated triggers after saving to database
      await getAllTriggers();
    } catch (error) {
      alert('Something went wrong');
    }
  };
  const handleAddItem = async () => {
    if (inputText.trim() === '') {
      return;
    }

    // Add the trigger
    await addTrigger(inputText);

    // Fetch the updated list of triggers
    await getAllTriggers();

    setInputText('');
  };

  const handleDeleteItem = async triggerId => {
    // Delete the trigger
    await deleteTrigger(triggerId);

    // Fetch the updated list of triggers
    await getAllTriggers();
  };

  // const getAllTriggers = async () => {
  //   try {
  //     const res = await get(`triggers/${userData?.userId}`);
  //     if (res.data?.triggers) {
  //       console.log('Triggers', res.data?.triggers);
  //       setTriggers(res.data?.triggers);
  //     }
  //   } catch (error) {
  //     alert('Something went wrong');
  //   }

  //   // await axios
  //   //   .get(`${BASEURL}triggers/652f97b3f43399f5c2317a88`)
  //   //   .then(r => {
  //   //     console.log('Triggers', r.data?.triggers);
  //   //     setTriggers(r.data?.triggers);
  //   //   })
  //   //   .catch(err => {
  //   //     alert('Something went wrong');
  //   //   });
  // };
  const getAllTriggers = async () => {
  try {
    const res = await get(`triggers/${userData?.userId}`);
    if (res.data?.triggers) {
      console.log('Triggers', res.data?.triggers);
      setTriggers(res.data?.triggers);

      // Reset all checkboxes
      setSpider(false);
      setWound(false);
      setGun(false);
      setCockroach(false);
      setSoldier(false);
      setAccident(false);

      // Update checkboxes based on fetched data
      res.data?.triggers.forEach(trigger => {
        switch (trigger.name) {
          case 'spider':
            setSpider(true);
            break;
          case 'wound':
            setWound(true);
            break;
          case 'gun':
            setGun(true);
            break;
          case 'cockroach':
            setCockroach(true);
            break;
          case 'soldier':
            setSoldier(true);
            break;
          case 'accident':
            setAccident(true);
            break;
          default:
            break;
        }
      });
    }
  } catch (error) {
    alert('Something went wrong');
  }
};

  const addTrigger = async name => {
    try {
      const res = await post('triggers/addTrigger', {
        name,
        userId: userData?.userId,
      });
    } catch (error) {
      alert('Something went wrong');
    }

    // await axios
    //   .post(`${BASEURL}triggers/addTrigger`, {
    //     name,
    //     userId: '652f97b3f43399f5c2317a88',
    //   })
    //   .then(r => { })
    //   .catch(err => {
    //     alert('Something went wrong');
    //   });
  };

  const deleteTrigger = async triggerId => {
    try {
      const res = await del(`triggers/${triggerId}`);
    } catch (error) {
      alert('Something went wrong');
    }

    // await axios
    //   .delete(`${BASEURL}triggers/${triggerId}`)
    //   .then(r => { })
    //   .catch(err => {
    //     alert('Something went wrong');
    //   });
  };

  React.useEffect(() => {
    getAllTriggers();
  }, []);

  const ListItem = ({text, onDelete, triggerId}) => {
    return (
      <View style={style.keywordContainer}>
        <Text
          style={{
            color: '#638184',
            fontFamily: 'Lexend-Regular',
            fontSize: 16,
          }}>
          {text}
        </Text>
        <TouchableOpacity onPress={() => onDelete(triggerId)}>
          <Icon name="remove" size={20} color="#DC989A" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.generalBox}>
        <Text style={style.triggersTitle}>Triggers List</Text>
        <View style={style.checkboxContainer}>
          <Checkbox
            color="#DC989A"
            uncheckedColor="#638184"
            label="Spider"
            status={spider ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange('spider', !spider)}
          />
          <Text style={style.triggerOptions}>spider</Text>
        </View>
        <View style={style.checkboxContainer}>
        <Checkbox
          color="#DC989A"
          uncheckedColor="#638184"
          label="Wound"
          status={wound ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxChange('wound', !wound)}
        />
          <Text style={style.triggerOptions}>wound</Text>
        </View>
        <View style={style.checkboxContainer}>
        <Checkbox
          color="#DC989A"
          uncheckedColor="#638184"
          label="Gun"
          status={gun ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxChange('gun', !gun)}
        />
          <Text style={style.triggerOptions}>gun</Text>
        </View>
        <View style={style.checkboxContainer}>
        <Checkbox
  color="#DC989A"
  uncheckedColor="#638184"
  label="Cockroach"
  status={cockroach ? 'checked' : 'unchecked'}
  onPress={() => handleCheckboxChange('cockroach', !cockroach)}
/>
          <Text style={style.triggerOptions}>cockroach</Text>
        </View>
        <View style={style.checkboxContainer}>
        <Checkbox
  color="#DC989A"
  uncheckedColor="#638184"
  label="Soldier"
  status={soldier ? 'checked' : 'unchecked'}
  onPress={() => handleCheckboxChange('soldier', !soldier)}
/>

          <Text style={style.triggerOptions}>soldier</Text>
        </View>
        <View style={style.checkboxContainer}>
        <Checkbox
  color="#DC989A"
  uncheckedColor="#638184"
  label="Accident"
  status={accident ? 'checked' : 'unchecked'}
  onPress={() => handleCheckboxChange('accident', !accident)}
/>
          <Text style={style.triggerOptions}>accident</Text>
        </View>
      </View>

      <View style={style.keywords}>
        <Text style={style.triggersTitle}>Keywords List</Text>
      {/* <FlatList
  data={triggers.filter(item => item.type === 'keyword')} // Filter out triggers
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item, index}) => (
    <ListItem
      text={item.name}
      onDelete={() => handleDeleteItem(item.id)}
      triggerId={item.id}
    />
  )}
/> */}
<FlatList
  data={triggers.filter(item =>
    !['spider', 'wound', 'gun', 'cockroach', 'soldier', 'accident'].includes(item.name)
  )}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item, index}) => (
    <ListItem
      text={item.name}
      onDelete={() => handleDeleteItem(item.id)}
      triggerId={item.id}
    />
  )}
/>

        <TextInput
          style={style.keywordBox}
          placeholder="Add your own"
          placeholderTextColor={'#DC989A'}
          value={inputText}
          activeUnderlineColor="transparent"
          underlineColor="transparent"
          onChangeText={text => setInputText(text)}
        />
        <Text style={style.addButton} onPress={handleAddItem}>
          Add
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default TriggerScreen;
