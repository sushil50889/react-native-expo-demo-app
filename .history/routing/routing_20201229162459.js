import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import authStackScreens from './authStack';
import authenticatedUserDrawerStack from './authenticatedUserStack';
import asyncStore from '../helpers/async-storage/storage';
import { AppLoading } from 'expo';
import { loadFonts } from '../helpers/static-data/loadFonts';
// asyncStore.clearAllStorage();

  
function mainRoutingStack() {

  const AuthContext = React.createContext();

  const [state, dispatch] = React.useReducer((prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            userData: null
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userData: action.userdata
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userData: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      userData: null
    }
  );

  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  const [isAppLoading, setisAppLoading] = useState(true);


  useEffect(()=>{
    asyncStore.getStorageItem('userdata').then(data => {
      if(data && data.email){
        setisUserLoggedIn(true);
      }else{
        setisUserLoggedIn(false);
      }
    }).catch(err => {
      console.log(err);
      setisUserLoggedIn(false);
    })
  })




  if (isAppLoading) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => { setisAppLoading(false) }} onError={console.warn}/>
    )
  }

  return (
    <NavigationContainer>
      {/* { loginState.userdata ? authenticatedUserStack() : authStackScreens() } */}
      { isUserLoggedIn ? authenticatedUserDrawerStack() : authenticatedUserDrawerStack() }
    </NavigationContainer>
  )
}
  
export default mainRoutingStack;

