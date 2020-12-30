import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Notifications from 'expo-notifications';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { ButtonTypeOne } from '../../components/button';
import {connect} from 'react-redux';

 const ProfileScreen = (props)=> {

  const { navigation, route, pushtoken } = props;

  // console.log('navigation : ', navigation);
  // console.log('route : ', route);
  // console.log('pushtoken : ', pushtoken);

  async function sendPushNotification(expoPushToken) {

    let message = {};

    if (Platform.OS === 'android') {
      message = {
        to: expoPushToken,
        // sound: 'default',
        title: 'Notification Title',
        body: 'Notification body!',
        // priority: 'high',
        // channelId: 'defaultchannel',
        data: { data: 'Sample Notification Data' },
      };
    }else if(Platform.OS === 'ios'){
      message = {
        to: expoPushToken,
        sound: 'default',
        title: 'Notification Title',
        subtitle: 'Notification Sub-Title',
        body: 'Notification body!',
        priority: 'high',
        badge: 1,
        data: { data: 'Sample Notification Data' },
      };
    }
    
    console.log(message);
    console.log(expoPushToken);
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }

  function sendPush(){
    sendPushNotification(pushtoken);
  }


  return (
    <View style={styles.container}>
      <Text>Welcome to {route.name} Screen</Text>
      <ButtonTypeOne onpress={sendPush} text='Send Push Notification'/>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




const mapStateToProps = (state) => {
  return {
    // userData: state.indexReducer.userData,
    pushtoken: state.indexReducer.pushtoken,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loginUserDispatch: (payload) => dispatch(setUserLoginData(payload)), 
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);