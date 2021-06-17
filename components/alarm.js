import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Audio } from 'expo-av';
import styles from '../styles/styles';

const Alarm = () =>{
  const[minutes, setMinutes] = useState(25);
  const[seconds, setSeconds] = useState(0);
  const[round, setRound] = useState(0);
  const[loop, setLoop] = useState(1);
  const[work, setWork] = useState(true);
  const[sound, setSound] = useState();

  let color = work ? 'red' : 'green';

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../static/assets/son.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };
  
  useEffect(() =>{
    let countdown = setInterval(() => {
      //Change minutes and seconds
      if(seconds === 0){
        setMinutes(minutes - 1);
      };
      if(seconds === 0){
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
      
      //Switch
      if(minutes === 0 && seconds === 0){
        playSound();

        if(loop % 2 === 1){
          setMinutes(5);
          setSeconds(0);
          setWork(!work);
          setLoop(loop + 1);
          setRound(round + 1);
        } else{
          setMinutes(25);
          setSeconds(0);
          setWork(!work);
          setLoop(loop + 1);
        };
      };
    }, 1000); 
    return(() =>{
      clearInterval(countdown);
    });
  });
  
  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.pomodoroAlarm}>POMODORO</Text>
      <Text style={styles.alarm}>{`${minutes}:${seconds}`}</Text>
      <Text style={[styles.textButton, styles.work, {color: color}]}>{work ? 'Work' : 'Pause'}</Text>
      <Text style={styles.textButton}>{round}</Text>
      <Text style={styles.textAlarm}>©Joris USCLAT</Text>
    </View>
  )
};

export default Alarm;