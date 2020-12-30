import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Notifications from 'expo-notifications';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonTypeOne } from '../../components/button';

export default function ProfileScreen({ navigation, route }) {

  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Notification Title',
      body: 'Notification body!',
      data: { data: 'Sample Notification Data' },
    };
  
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