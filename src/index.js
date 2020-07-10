import React from 'react';

import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import theme from './assets/theme';

import Routes from './routes';

const app = () => {

  const [fontLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular
  })

  if (!fontLoaded)
    return <></>
  else
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
