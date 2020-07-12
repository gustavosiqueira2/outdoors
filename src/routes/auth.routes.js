import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from '../pages/auth/login';
import Confirmation from '../pages/auth/confirmation';

const authRoutes = () => {

  return (
    <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  )

}

export default authRoutes;
