import React from 'react';
import mainRoutingStack from "./routing/routing";
import {Provider} from "react-redux";
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { AppLoading } from 'expo';
import { 
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
 } from 'react-native-paper';

import configureStore from "./redux-configuration/store/store";
import { enableScreens, shouldUseActivityState } from 'react-native-screens';
import { AuthContext } from './context/context';
import { loadFonts } from './static-data/loadAssets';
enableScreens();

const store = configureStore();

export default function App() {

  const [isAppLoading, setisAppLoading] = useState(true);
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
  if (isAppLoading) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => { setisAppLoading(false) }} onError={console.warn}/>
    )
  }


  return (
    // <PaperProvider theme={theme}>
    <PaperProvider>
      <Provider store={store}>
        {mainRoutingStack()}
      </Provider>
    </PaperProvider>
  ) 
}
