import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';
import asyncStore from '../async-storage/storage';
// asyncStore

export const registerForPushNotificationsAsync = async () => {

    if (Platform.OS === 'android') {
      // Notifications
      Notifications.setNotificationChannelAsync('defaultchannel', {
        name: 'defaultchannel',
        importance: Notifications.AndroidImportance.HIGH,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
        // name: string | null;
        // importance: AndroidImportance;
        // Optional attributes
        // bypassDnd: false,
        description: 'description data',
        // groupId: null,
        // lightColor?: string;
        lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
        showBadge: true,
        // sound: '../../assets/sound/notificationsound.mp3',
        sound: 'notificationsound.mp3',
        // audioAttributes?: Partial<AudioAttributes>;
        // vibrationPattern?: number[] | null;
        enableLights: true,
        enableVibrate: true,
      });
    }

    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }

      const USER_FACING_NOTIFICATIONS = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
      // let finalStatus2 = existingStatus;
      // console.log('USER_FACING_NOTIFICATIONS data   :   ', USER_FACING_NOTIFICATIONS);
      // console.log('USER_FACING_NOTIFICATIONS data   :   ', USER_FACING_NOTIFICATIONS.status);
      if (USER_FACING_NOTIFICATIONS.status !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
        // finalStatus2 = status;
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
        return tokenvalue;
      }

    } else {
        console.log('Must use physical device for Push Notifications');
        return null;
    }
  
    
}