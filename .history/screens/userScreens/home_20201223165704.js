import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import { fonts } from '../../helpers/static-data/fonts';
import { showSnackbarToast, snackToastStaticData } from '../../helpers/toast-message/toast';
// import ToastMessage from '../../helpers/toast-message/toast';
import { ButtonTypeOne } from '../../components/button';
import {tabBarOption } from '../../helpers/tab-bar-navigation-options/tabBarOptions';
import {connect} from 'react-redux';
import * as Font from 'expo-font';
import { registerForPushNotificationsAsync } from '../../helpers/push-notification/pushNotification';
import { setPushTokenData } from '../../redux-configuration/actions';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { windowWidth, windowHeight } from '../../helpers/static-data/screenWidthHeight';


 const HomeScreen = (props) => {

  const { navigation, route, tokenDispatch } = props;
  const [showSnack, setshowSnack] = useState(false);
  const [showSnackMsg, setshowSnackMsg] = useState(null);
  const [isFontLoaded, setisFontLoaded] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(()=> {

    registerForPushNotificationsAsync().then((data) => {
      // console.log('token  ccccccc  : ', data);
      tokenDispatch(data);
    }).catch((err) => {
      console.log('token  cccc  : ', err);
    });
    
    Font.loadAsync({
      epiloguevariable: require('../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf')
    }).then(() => {
      // console.log('loadAsync  loaded HomeScreen  : ', tabBarOption);
      tabBarOption['labelStyle'] = {
         fontFamily: fonts.epiloguevariable,
      };
      // console.log('loadAsync  loaded HomeScreen  : ', tabBarOption);
      setisFontLoaded(true);
    }).catch(err => {
      console.log('loadAsync HomeScreen    : ', err);
    }); 


    setTimeout(() => {

      if (Constants.isDevice) {

        Permissions.getAsync(Permissions.CAMERA).then(async (camPer) => {
          if (camPer.status !== 'granted'){
            Permissions.askAsync(Permissions.CAMERA).then((status) => {
              alert(JSON.stringify(status));
              if(status.status !== 'granted'){
                alert('CAMERA permission not granted');
              }else{
                alert('CAMERA permission granted');
              }
            }).catch(err => {
              alert('CAMERA permission err  : ', err);
            });            
          }
        }).catch(err=>{
          alert('CAMERA permission err  : ', err);
        });


        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          alert(JSON.stringify(notification));
        });

        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          alert(JSON.stringify(response));
        });


        
        
      }
      
    }, 2000);

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    }
    
  }, []);

  

  const onPressHome2 = ()=> {
    navigation.navigate('Home2')
  }

  const onPressHome3 = ()=> {
    navigation.navigate('Home3')
  }

  const onPressHome4 = ()=> {
    navigation.navigate('currentLocation')
  }

  const onPressHome5 = ()=> {
    navigation.navigate('destination');
  }

  const onPressHome6 = ()=> {
    navigation.navigate('SEListOneStack');
  }

  const onPressHome7 = ()=> {
    navigation.navigate('moviecarousel');
  }

  const onPressHome8 = ()=> {
    navigation.navigate('animatedtabs');
  }

  const onPressHome9 = ()=> {
    navigation.navigate('productdetails');
  }

  const openCamera = ()=> {
    navigation.navigate('camera')
  }

  const showSampleToast = ()=> {
    setshowSnackMsg(snackToastStaticData.testMessage);
    setshowSnack(true);    
  }

  const hideSnackbar = ()=> {
    setshowSnackMsg(null);
    setshowSnack(false);    
  }

  // style={styles.container}
  // contentContainerStyle={styles.scrollcontainer}

  return (
    <ScrollView contentContainerStyle={styles.scrollcontainer}>
      <Text style={{fontFamily: isFontLoaded ? fonts.epiloguevariable : null}}
      >Welcome to {route.name} Screen</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Button title="Go To Home 2" accessibilityLabel="User login button" color="#1f6ca6" onPress={onPressHome2} style={{paddingVertical: 10}}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Button title="Take Photo" accessibilityLabel="use camera button" color="#1f6ca6" onPress={openCamera} style={{paddingVertical: 10}}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Button title="Show Toast" accessibilityLabel="show toast" color="#1f6ca6" onPress={showSampleToast} style={{paddingVertical: 10}}/>
      </TouchableOpacity>

      <ButtonTypeOne onpress={onPressHome2} text='Push Notification'/>
      <ButtonTypeOne onpress={onPressHome3} text='Alert & Modal'/>
      <ButtonTypeOne onpress={onPressHome4} text='My Location'/>
      <ButtonTypeOne onpress={onPressHome5} text='Google Map Direction'/>
      <ButtonTypeOne onpress={onPressHome6} text='SE Example One'/>
      <ButtonTypeOne onpress={onPressHome7} text='Movie Carousel'/>
      <ButtonTypeOne onpress={onPressHome8} text='Animated Tabs'/>
      <ButtonTypeOne onpress={onPressHome9} text='Product Details'/>
      <ButtonTypeOne text='Stripe Payment'/>

      {showSnackbarToast(showSnackMsg, snackToastStaticData.defaultDuration, showSnack, hideSnackbar)}
      <StatusBar style="auto" />
    </ScrollView>
  )



}







const styles = StyleSheet.create({
  scrollcontainer: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    minHeight: windowHeight * 0.8
  },
  loginButton: {
    width: '80%',
    marginTop: 10,
  }
});




const mapStateToProps = (state) => {
  return {
    // userData: state.indexReducer.userData,
    pushtoken: state.indexReducer.pushtoken,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tokenDispatch: (payload) => dispatch(setPushTokenData(payload)), 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);