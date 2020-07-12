import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Basics from './pages/basics';
import Location from './pages/location';
import Preview from './pages/Preview';

const event = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Basics' component={Basics} />
      <Stack.Screen name='Location' component={Location} />
      <Stack.Screen name='Preview' component={Preview} />
    </Stack.Navigator>
  )

}

export default event;
