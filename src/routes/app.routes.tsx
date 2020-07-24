import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons';

import Map from '../pages/app/map';
import Perfil from '../pages/app/perfil';
import LaunchbaseRoutes from './launchbase.routes';

const returnIcon = (name: string) => {
  return {
    tabBarIcon: ({ color }: { color: string }) => (<Ionicons name={name} color={color} size={24} />)
  }
}

class appRoutes extends React.Component {

  // initial Route Map

  render() {
    return (
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen name="Launchbase" component={LaunchbaseRoutes} options={returnIcon('ios-rocket')} />
        <Tab.Screen name="Map" component={Map} options={returnIcon('ios-map')} />
        <Tab.Screen name="Perfil" component={Perfil} options={returnIcon('ios-person')} />
      </Tab.Navigator>
    );
  }

}

export default appRoutes;
