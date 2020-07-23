import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Landing from '../pages/app/launchbase/pages/landing';
import Basics from '../pages/app/launchbase/pages/basics';
import Location from '../pages/app/launchbase/pages/location';
import Preview from '../pages/app/launchbase/pages/preview';

class event extends React.Component {

  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Basics' component={Basics} />
        <Stack.Screen name='Location' component={Location} />
        <Stack.Screen name='Preview' component={Preview} />
      </Stack.Navigator>
    )
  }

}

export default event;
