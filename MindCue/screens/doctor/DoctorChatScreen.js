import React, {useState, useRef} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DoctorChat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  const handleSend = () => {
    if (inputText.trim() === '') {
      return;
    }

    // Assuming you have a user object with a unique ID
    const user = {id: 1, name: 'Mohammad'};

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      user,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    // Scroll to the latest message
    flatListRef.current.scrollToEnd();
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              padding: 8,
              backgroundColor: item.user.id === 1 ? '#D2E5E7' : '#FFF',
              alignSelf: item.user.id === 1 ? 'flex-end' : 'flex-start',
              margin: 4,
              color: '#638184',
              borderRadius: 8,
              maxWidth: '70%',
            }}>
            <Text
              style={{
                color: '#638184',
              }}>{`${item.user.name} (${item.timestamp}):`}</Text>
            <Text style={{color: '#638184'}}>{item.text}</Text>
          </View>
        )}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <TextInput
          style={{flex: 1, padding: 8}}
          placeholder="Type your message..."
          placeholderTextColor={'#638184'}
          color={'#638184'}
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <Icon name="send" size={20} color={'#DC989A'} onPress={handleSend} />
      </View>
    </View>
  );
}

export default DoctorChat;
