import React from 'react';
import mainRoutingStack from "./routing/routing";
import {Provider} from "react-redux";
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import { 
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
 } from 'react-native-paper';

import configureStore from "./redux-configuration/store/store";
import { enableScreens, shouldUseActivityState } from 'react-native-screens';
import { AuthContext } from './context/context';
enableScreens();

const store = configureStore();

export default function App() {

  // const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  // const CustomDefaultTheme = {
  //   ...NavigationDefaultTheme,
  //   ...PaperDefaultTheme,
  //   colors: {
  //     ...NavigationDefaultTheme.colors,
  //     ...PaperDefaultTheme.colors,
  //     background: '#ffffff',
  //     text: '#333333'
  //   }
  // }
  
  // const CustomDarkTheme = {
  //   ...NavigationDarkTheme,
  //   ...PaperDarkTheme,
  //   colors: {
  //     ...NavigationDarkTheme.colors,
  //     ...PaperDarkTheme.colors,
  //     background: '#333333',
  //     text: '#ffffff'
  //   }
  // }

  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


  return (
    // <PaperProvider theme={theme}>
    <PaperProvider>
      <Provider store={store}>
        {mainRoutingStack()}
      </Provider>
    </PaperProvider>
  ) 
}
