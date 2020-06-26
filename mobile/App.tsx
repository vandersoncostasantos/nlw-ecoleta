import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import {
  ThemeProvider,
  DefaultTheme,
  Types,
} from './src/styles/styled-components';

import Routes from './src/routes';

import { LightTheme } from './src/styles/themes/Themes';

export default function App() {
  const [theme, setTheme] = useState<Types>(LightTheme);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      <Routes></Routes>
    </ThemeProvider>
  );
}
