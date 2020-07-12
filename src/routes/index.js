import React from 'react';

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const routes = () => {

  const [fontLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  if (!fontLoaded)
    return <></>
  else
    // return <AuthRoutes />;
    return <AppRoutes />

}

export default routes;
