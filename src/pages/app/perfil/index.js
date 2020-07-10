import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import Random from './random';
import Random1 from './random1';

import { View, Text } from 'react-native';

const perfil = () => {

  return (

    <View style={{ flex: 1 }}>

      <View style={{ flex: 2, backgroundColor: '#1e1e1e' }}>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
            <View style={{ borderRadius: 50, width: 90, height: 90, backgroundColor: '#fff' }}>

            </View>
          </View>
          <View style={{ flex: 7, flexDirection: 'row' }}>
            {/* <View style={{ flex: 1, backgroundColor: '#f00' }}>

            </View>
            <View style={{ flex: 1, backgroundColor: '#0f0' }}>

            </View>
            <View style={{ flex: 1, backgroundColor: '#00f' }}>

            </View> */}
          </View>
        </View>
        <View style={{ flex: 2, padding: 10, paddingTop: 15 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 4, color: '#fff' }}>
            Guzin
          </Text>
          <Text style={{ fontSize: 14, color: '#fff' }}>
            PLULUPLULU PLULUPLULUPLULUPLULU
            PLULUPLULU
          </Text>
        </View>
      </View>

      <View style={{ flex: 3, backgroundColor: '#121212' }}>
        {/* <Tab.Navigator>
          <Tab.Screen name='Teste' component={Random} />
          <Tab.Screen name='Teste1' component={Random1} />
        </Tab.Navigator> */}
      </View>

    </View>
  );

}

export default perfil;
