import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { Provider } from 'react-redux';
import store from '../store';

import { Ionicons } from '@expo/vector-icons';

import Map from '../pages/app/map';
import Perfil from '../pages/app/perfil';
import Event from '../pages/app/event';

const returnIcon = (name) => {
  return {
    tabBarIcon: ({ color }) => (<Ionicons name={name} color={color} size={24} />)
  }
}

const appRoutes = () => {

  // initial Route Map

  return (
    <Provider store={store}>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen name="Event" component={Event} options={returnIcon('md-add-circle-outline')} />
        <Tab.Screen name="Map" component={Map} options={returnIcon('ios-map')} />
        <Tab.Screen name="Perfil" component={Perfil} options={returnIcon('ios-person')} />
      </Tab.Navigator>
    </Provider>
  );

}

export default appRoutes;
