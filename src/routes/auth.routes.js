import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from '../pages/auth/login';
import Confirmation from '../pages/auth/confirmation';

class authRoutes extends React.Component {

  render() {
    return (
      <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Confirmation" component={Confirmation} initialParams={{ registred: 0 }}/>
      </Stack.Navigator>
    )
  }

}

export default authRoutes;
