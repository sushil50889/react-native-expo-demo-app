import React, {useState, useEffect} from 'react';
import mainRoutingStack from "./routing/routing";
import {Provider} from "react-redux";
import { 
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
 } from 'react-native-paper';

import configureStore from "./redux-configuration/store/store";
import { enableScreens, shouldUseActivityState } from 'react-native-screens';
import { loadAssets } from './helpers/static-data/loadstaticAssets';
enableScreens();

const store = configureStore();

export default function App() {

  useEffect(()=>{
    loadAssets().then((data) => {
      // console.log('loadAssets after promise resolve  :  ', data);
    }).catch(err => {
      console.log('loadAssets after promise reject  :  ', err);
    })
  }, []);


  return (
    // <PaperProvider theme={theme}>
    <PaperProvider>
      <Provider store={store}>
        {mainRoutingStack()}
      </Provider>
    </PaperProvider>
  ) 
}




// 911735c5484e20c6e0c3b23279c67d06
