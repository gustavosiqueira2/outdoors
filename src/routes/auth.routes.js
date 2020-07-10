import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from '../pages/auth/login';

const authRoutes = () => {

  return (
    <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Confirmation" component={} /> */}
    </Stack.Navigator>
  )

}

export default authRoutes;
