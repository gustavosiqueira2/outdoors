import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { Provider } from 'react-redux';
import store from '../store';

import { Ionicons } from '@expo/vector-icons';

import Map from '../pages/app/map';
import Perfil from '../pages/app/perfil';

const returnIcon = (name) => { tabBarIcon: ({ color }) => (<Ionicons name={name} color={color} size={20} />) }

const appRoutes = () => {

  return (
    <Provider store={store}>
      <Tab.Navigator initialRouteName="Perfil">
        <Tab.Screen name="Map" component={Map} options={returnIcon('ios-map')} />
        <Tab.Screen name="Perfil" component={Perfil} options={returnIcon('ios-person')} />
      </Tab.Navigator>
    </Provider>
  );

}

export default appRoutes;
