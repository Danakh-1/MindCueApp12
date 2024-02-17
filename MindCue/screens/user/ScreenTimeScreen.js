import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {TimerPicker} from 'react-native-timer-picker';
import {TextInput} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import style from '../../components/style';

function ScreenTimeScreen({navigation}) {
  //   const [date, setDate] = useState(new Date(1598051730000));
  //   const [mode, setMode] = useState('date');
  //   const [show, setShow] = useState(false);

  //   const onChange = (event, selectedDate) => {
  //     const currentDate = selectedDate;
  //     setShow(false);
  //     setDate(currentDate);
  //   };

  //   const showMode = (currentMode) => {
  //     setShow(true);
  //     setMode(currentMode);
  //   };

  //   // const showDatepicker = () => {
  //   //   showMode('date');
  //   // };

  //   const showTimepicker = () => {
  //     showMode('time');
  //   };

  //   const formatDate = (date, time) => {
  //     return `${date.getDate()}/${date.getMonth() +
  //       1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  //   };

  //   return (
  //     <SafeAreaView>
  //       {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
  //       <Button onPress={showTimepicker} title="Show time picker!" />
  //       <Text>{date.toLocaleString()}</Text>
  //       <TouchableOpacity onPress={showTimepicker}>
  //           <Text>{formatDate(date, time)}</Text>
  //       </TouchableOpacity>

  //       {show && (
  //         <DateTimePicker
  //           testID="dateTimePicker"
  //           value={date}
  //           mode={mode}
  //           is24Hour={true}
  //           display='default'
  //           onChange={onChange}
  //         />
  //       )}
  //       <StatusBar style="auto" />
  //     </SafeAreaView>
  //   );
  // };

  //   const [date, setDate] = useState(new Date());
  //   const [time, setTime] = useState(new Date());
  //   const [mode, setMode] = useState('date');
  //   const [show, setShow] = useState(false);

  //   const onChange = (event, selectedValue) => {
  //     setShow(Platform.OS === 'ios');
  //     if (mode == 'date') {
  //       const currentDate = selectedValue || new Date();
  //       setDate(currentDate);
  //       setMode('time');
  //       setShow(Platform.OS !== 'ios');
  //     } else {
  //       const selectedTime = selectedValue || new Date();
  //       setTime(selectedTime);
  //       setShow(Platform.OS === 'ios');
  //       //setMode('date');
  //     }
  //   };

  //   const showMode = currentMode => {
  //     setShow(true);
  //     setMode(currentMode);
  //   };

  //   const showDatepicker = () => {
  //     showMode('time');
  //   };

  //   return (
  //     <View>
  //     <View style={style.timerContainer}>
  //       <Text style={style.triggersTitle}>Set Time Limit</Text>
  //       <TouchableOpacity onPress={showDatepicker}>
  //         <Text style={style.timerStyle}>{formatDate(time)}</Text>
  //       </TouchableOpacity>
  //       </View>

  //       <View style={style.timerContainer}>
  //       <Text style={style.triggersTitle}>Set Break Limit</Text>
  //       <TouchableOpacity onPress={showDatepicker}>
  //         <Text style={style.timerStyle}>{formatDate(time)}</Text>
  //       </TouchableOpacity>
  //       </View>

  //       {show && (
  //         <DateTimePicker
  //           testID='dateTimePicker'
  //           //timeZoneOffsetInMinutes={0}
  //           value={date}
  //           mode={mode}
  //           is24Hour={false}
  //           display='default'
  //           onChange={onChange}
  //         />
  //       )}
  //       </View>
  //   );
  // };

  // const formatDate = (time) => {
  //   return `${time.getHours()}:${time.getMinutes()}`;
  // };
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedHours, setSelectedHours] = useState('');
  const [selectedMinutes, setSelectedMinutes] = useState('');
  const [remainingTime, setRemainingTime] = useState(0);

  const timerRef = useRef(null);

  const handleStartTimer = () => {
    const hours = parseInt(selectedHours) || 0;
    const minutes = parseInt(selectedMinutes) || 0;
    const totalSeconds = hours * 3600 + minutes * 60;
    setRemainingTime(totalSeconds);
    setIsTimerRunning(true);

    timerRef.current = setInterval(() => {
      setRemainingTime(prevRemainingTime => {
        if (prevRemainingTime <= 1) {
          clearInterval(timerRef.current);
          setIsTimerRunning(false);
          return 0;
        }
        return prevRemainingTime - 1;
      });
    }, 1000);
  };

  const handlePauseTimer = () => {
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
  };

  const renderTimer = () => {
    if (isTimerRunning) {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      return (
        <Text style={styles.timerText}>
          {`${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </Text>
      );
    } else {
      return <Text style={styles.timerText}>00:00:00</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Hours"
          value={selectedHours}
          onChangeText={text => setSelectedHours(text)}
          keyboardType="numeric"
        />
        <Text style={styles.separator}>:</Text>
        <TextInput
          style={styles.input}
          placeholder="Minutes"
          value={selectedMinutes}
          onChangeText={text => setSelectedMinutes(text)}
          keyboardType="numeric"
        />
      </View>
      {renderTimer()}
      <View style={styles.buttonContainer}>
        {!isTimerRunning ? (
          <Button title="Start" onPress={handleStartTimer} />
        ) : (
          <Button title="Reset" onPress={handlePauseTimer} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    width: 60,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
  },
  separator: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  timerText: {
    fontSize: 36,
    marginBottom: 20,
    color: '#638184',
  },
  buttonContainer: {
    width: 100,
  },
});

export default ScreenTimeScreen;
