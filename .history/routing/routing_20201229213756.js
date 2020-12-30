import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import authStackScreens from './authStack';
import authenticatedUserDrawerStack from './authenticatedUserStack';
import asyncStore from '../helpers/async-storage/storage';
import { AppLoading } from 'expo';
import { loadFonts } from '../helpers/static-data/loadFonts';
import { AuthContext } from '../context/context';
asyncStore.clearAllStorage();

  
function mainRoutingStack() {

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

    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);



  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', token: 'gret54etds4ds4deyd46testd45345estset45345353', userdata: {email: 'example@admin.com', username: 'testuser', phone: '9999999999'}});
        setisUserLoggedIn(true);
      },

      signOut: () => { dispatch({ type: 'SIGN_OUT' }); setisUserLoggedIn(false)},

      signUp: async data => {
        dispatch({ type: 'SIGN_IN', token: 'gret54etds4ds4deyd46testd45345estset45345353' });
      }
    }),
    []
  );




  if (isAppLoading) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => { setisAppLoading(false) }} onError={console.warn}/>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {/* { loginState.userdata ? authenticatedUserStack() : authStackScreens() } */}
        {/* { isUserLoggedIn ? authenticatedUserDrawerStack() : authenticatedUserDrawerStack() } */}
        {(state.userData == null && !isUserLoggedIn) ? authStackScreens() : authenticatedUserDrawerStack()}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
  
export default mainRoutingStack;

