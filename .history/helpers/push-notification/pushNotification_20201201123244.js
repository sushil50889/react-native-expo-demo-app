import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';
import asyncStore from '../async-storage/storage';
// asyncStore

export const registerForPushNotificationsAsync = async () => {

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('defaultchannel', {
        name: 'defaultchannel',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        console.log('Failed to get push token for push notification!');
        return;
      }

      let tokenvalue = await asyncStore.getStorageItem('fcmtoken');
      console.log('existing token value  :  ', tokenvalue);

      if(!tokenvalue){
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log('token value  :  ', token);
      //   this.setState({ expoPushToken: token });
        if(token){
          asyncStore.setStorageItem('fcmtoken', token);
          return token;
        }
      }else{
        return null;
      }

    } else {
        console.log('Must use physical device for Push Notifications');
        return null;
    }
  
    
}