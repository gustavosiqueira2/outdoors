import React from 'react';

import { RouteProp } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from '../pages/auth/login';
import Confirmation from '../pages/auth/confirmation';

type NavigationProps = {
  Login: undefined,
  Confirmation: { data: { phonenumber: string }, exist: boolean } | undefined;
}

export type AuthRouteParamList = {
  navigation: StackNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'Confirmation' | 'Login'>
}

class authRoutes extends React.Component {

  render() {
    return (
      <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Confirmation" component={Confirmation} initialParams={{ registred: 0 }} />
      </Stack.Navigator>
    )
  }

}

export default authRoutes;
