import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import React from 'react';
import Router from './router';
import {colors} from './utils';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.green,
    accent: '#f1c40f',
  },
};

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <MainApp />
    </PaperProvider>
  );
};

export default App;
