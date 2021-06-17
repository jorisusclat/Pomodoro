import React from 'react';
import { View, Text, Pressable, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles';

const Action = () =>{
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.pomodoro}>POMODORO</Text>
      <Pressable 
        style={styles.pressable}
        onPress={() => navigation.navigate('Pomodoro')}
      >
        <Text style={styles.textButton}>Start</Text>
      </Pressable>
      <Text style={styles.text}>©Joris USCLAT</Text>
    </View>
  )
};

export default Action;