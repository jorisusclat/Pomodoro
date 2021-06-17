import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Action from './action';
import Alarm from './alarm';

const Stack = createStackNavigator();

const Navigation = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Action} options={{headerShown: false}}/>
      <Stack.Screen name="Pomodoro" component={Alarm} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
};

export default Navigation;