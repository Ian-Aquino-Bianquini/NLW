import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import {AppLoading} from 'expo';


import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  const [FontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Ubuntu_700Bold,
  });

  if(!FontsLoaded){
  return <AppLoading />
}

  return (
     <>
       <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
       <Routes />
     </>
  );
}
