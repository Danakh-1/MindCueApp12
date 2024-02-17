import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000';
let socket;

function DoctorChat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);
  const [singleFile, setSingleFile] = useState(null);

  useEffect(() => {
    socket = io(ENDPOINT);
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) {
      return;
    }

    const user = { id: 1, name: 'Latifah' };
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      user,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    flatListRef.current.scrollToEnd();
  };

  const uploadFile = async () => {
    if (!singleFile) {
      alert('Please select a file first');
      return;
    }

    const fileToUpload = singleFile;
    const data = new FormData();
    data.append('file', fileToUpload);

    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const responseJson = await res.json();
      if (responseJson.status === 1) {
        alert('Upload Successful');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSingleFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
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
            <Text style={{ color: '#638184' }}>
              {`${item.user.name} (${item.timestamp}):`}
            </Text>
            <Text style={{ color: '#638184' }}>{item.text}</Text>
          </View>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          gap: 10,
        }}>
        <TextInput
          style={{ flex: 1, padding: 8 }}
          placeholder="Type your message..."
          placeholderTextColor={'#638184'}
          color={'#638184'}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={selectFile}>
          <Icon name="file-upload" size={20} color={'#DC989A'} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={uploadFile}>
          <Icon name="upload" size={20} color={'#DC989A'} />
        </TouchableOpacity>
        <Icon name="send" size={20} color={'#DC989A'} onPress={handleSend} />
      </View>
    </View>
  );
}

export default DoctorChat;
