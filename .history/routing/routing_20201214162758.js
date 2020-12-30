import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import authStackScreens from './authStack';
import authenticatedUserDrawerStack from './authenticatedUserStack';
import asyncStore from '../helpers/async-storage/storage';
// import { View, ActivityIndicator } from 'react-native';
// import { AuthContext } from '../context/context';
import { AppLoading } from 'expo';
// asyncStore.clearAllStorage();
import { loadFonts } from '../helpers/static-data/loadFonts';

  
function mainRoutingStack() {

  // console.log('form routing file ....');

  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  const [isAppLoading, setisAppLoading] = useState(true);

  

  // const initialLoginState = {
  //   isLoading: true,
  //   userdata: null,
  // };


  // const loginReducer = (prevState, action) => {
  //   switch(action.type) {
  //     case 'LOGIN': 
  //       return {
  //         ...prevState,
  //         userdata: action.payload,
  //         isLoading: false,
  //       }
  //     case 'LOGOUT': 
  //       return {
  //         ...prevState,
  //         userdata: null,
  //         isLoading: false,
  //       }
  //   }
  // }



  // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  // const authContext = React.useMemo(() => ({
  //   signIn: (foundUser) => {
  //     dispatch({ type: 'LOGIN', payload: foundUser });
  //   },
  //   signOut: () => {
  //     dispatch({ type: 'LOGOUT' });
  //   },
  //   toggleTheme: () => {
  //     setIsDarkTheme( isDarkTheme => !isDarkTheme );
  //   }
  // }), []);


  useEffect(()=>{
    // console.log('calling use effect method');
    asyncStore.getStorageItem('userdata').then(data => {
      if(data && data.email){
        // authContext.signIn({email: 'example@admin.com', username: 'testuser', phone: '9999999999'});
        setisUserLoggedIn(true);
      }else{
        // authContext.signOut();
        setisUserLoggedIn(false);
      }
    }).catch(err => {
      console.log(err);
      // authContext.signOut();
      setisUserLoggedIn(false);
    })
  })
  




  // if(loginState.isLoading) {
  //   return (
  //     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   )
  // }

  // async function _cacheResourcesAsync() {
  //   console.log('gsdfsdfsdfsdfsdfsd  image data....');
  //   const images = [null];

  //   const cacheImages = images.map(image => {
  //     return Asset.fromModule(image).downloadAsync();
  //   }); 
  //   return Promise.all(cacheImages);
  // }




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

