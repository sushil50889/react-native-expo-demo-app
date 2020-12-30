import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CameraComp from '../../components/cameraComponent';

const CameraScreen = function ({navigation, routes}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [hasPermissionMediaLibrary, setHasPermissionMediaLibrary] = useState(null);
  // const [hasCamera, setHasCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flahstype, setFlashType] = useState(Camera.Constants.FlashMode.off);
  const [autoFocus, setautoFocus] = useState(Camera.Constants.AutoFocus.on);
  const [whiteBalance, setwhiteBalance] = useState(Camera.Constants.WhiteBalance.auto);
  const [ratio, setratio] = useState('16:9');

  useEffect(() => {
    (async () => {
      try{
        const { status } = await Camera.requestPermissionsAsync();
        // console.log('checkstatus camera  :  ', status);
        setHasPermission(status === 'granted');

        const checkstatus = await MediaLibrary.getPermissionsAsync();
        // console.log('checkstatus  :  ', checkstatus); 
        if(checkstatus.status !== 'granted' || !checkstatus.granted){
          let permissionResult = await MediaLibrary.requestPermissionsAsync();
          // console.log('permissionResult  :  ', permissionResult);
        } 

        console.log('type  :  ', type);
        console.log('flahstype  :  ', flahstype);
        console.log('Auto focus  :  ', autoFocus);
      }catch(err){
        console.log(err);
      }      
    })();
  }, []);



  if (hasPermission === null) {
    return <Text>No access to camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  function flipCamera() {
    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
    console.log('type  :  ', type);
  }

  function cameraflash() {
    console.log('flash called...');
    setFlashType(flahstype === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off);
    console.log('flahstype  :  ', flahstype);
  }

  function camerafocus() {
    console.log('focus called...');
    setautoFocus(autoFocus === Camera.Constants.AutoFocus.on ? Camera.Constants.AutoFocus.off : Camera.Constants.AutoFocus.on);
    console.log('focustype  :  ', autoFocus);
  }

  function gotoHome(){
    navigation.navigate('Home1');
  }
  



  return (
    <View style={{ flex: 1 }}>
        {/* { (Camera.isAvailableAsync()) ? <CameraComp type={type} flip={flipCamera}/> : <Text>Camera Not Found</Text> } */}
        <CameraComp type={type} flahstype={flahstype} autofocus={autoFocus} whitebalance={whiteBalance} ratio={ratio} focus={camerafocus} flip={flipCamera} gotoHome={gotoHome} flash={cameraflash}/>
    </View>
  )


}





export default CameraScreen;