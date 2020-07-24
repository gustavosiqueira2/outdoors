import React from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import theme from './assets/theme';

import Routes from './routes';

const app = () => {

    return (
      <>
        <StatusBar barStyle={'light-content'} />

        <NavigationContainer theme={theme}>
          <Routes />
        </NavigationContainer>
      </>
    );

}

export default app;
