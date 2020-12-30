import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import showIcon, {iconData} from '../helpers/icons/icons';
import { globalCSS } from '../GlobalCSS';
import { showSnackbarToast, snackToastStaticData } from '../helpers/toast-message/toast';


const CameraComp = function ({type, flip, flash, flahstype, autofocus, focus, whitebalance, ratio, gotoHome}) {

    // console.log('sdfsdfsdfsd  ', type);
    // console.log('sdfsdfsdfsd  ', flip);

  const [cameraRef, setCameraRef] = useState(null);
  const [isPicAvailable, setIsPicAvailable] = useState(null);
  const [showSnack, setshowSnack] = useState(false);
  const [showSnackMsg, setshowSnackMsg] = useState(null);


  async function takePicture() {
    if(cameraRef){
        let photo = await cameraRef.takePictureAsync();
        console.log('photo', photo);
        if(photo && photo.uri){
            setIsPicAvailable(photo.uri);
        }
    }    
  }
  
  
  async function savePicToAlbum() {
    if(isPicAvailable){
        try {
          
            let asset = await MediaLibrary.createAssetAsync(isPicAvailable);
            let isAlbumPresent = await  MediaLibrary.getAlbumAsync('Expo-Test-App');
            // console.log('isAlbumPresent  :  ', isAlbumPresent);
            // console.log('isAlbumPresent id :  ', isAlbumPresent.id);
            if(isAlbumPresent && isAlbumPresent.id){
                let addedAsset = await MediaLibrary.addAssetsToAlbumAsync([asset], isAlbumPresent.id, false);
                // console.log('addedAsset   :   > ', addedAsset);
                showSnackToast(snackToastStaticData.assetSavedMessage);
                // gotoHome();
            }else if(!isAlbumPresent){
                let newAlbum = await MediaLibrary.createAlbumAsync('Expo-Test-App', asset, false);
                // console.log('newAlbum  :  ', newAlbum);
                showSnackToast(snackToastStaticData.assetSavedMessage);
                // gotoHome();
            }  
            
            // showSnackbarToast(showSnackMsg, snackToastStaticData.defaultDuration, showSnack, hideSnackbar);
            
        } catch (error) {
            console.log('savePicToAlbum  :  ', error);
            showSnackToast(snackToastStaticData.assetSavedErrMessage);
        }        
    }else{
        console.log('Sorry, picture not available');
        showSnackToast(snackToastStaticData.assetNotFound);
        // gotoHome();
    }    
  }


  const showSnackToast = (msg)=> {
    setshowSnackMsg(msg);
    setshowSnack(true);    
  }


  const hideSnackbar = ()=> {
    setshowSnackMsg(null);
    setshowSnack(false);  
    gotoHome();  
  }



  return (
    <View style={{ flex: 1 }}>
        {!isPicAvailable ?  
        <Camera style={{ flex: 1 }} type={type} flash={flahstype} autoFocus={autofocus} whiteBalance={whitebalance} ratio={ratio} ref={ref => {setCameraRef(ref)}}>
            <View style={styles.viewContainer}>
                {/* // take picture */}
                <TouchableOpacity style={styles.takePictureButtonTO} onPress={() => { try{takePicture()}catch(err){console.log(err)} }}>
                    { showIcon({name: iconData.name[0], size: iconData.size[0], color: iconData.color[0], type: iconData.type[0]}) }
                </TouchableOpacity>
                {/* // camera flip */}
                <TouchableOpacity style={styles.flipButtonTO} onPress={() => { flip() }}>
                    { (type === 0) ? 
                        showIcon({name: iconData.name[1], size: iconData.size[1], color: iconData.color[1], type: iconData.type[1]})
                      : 
                        showIcon({name: iconData.name[1], size: iconData.size[2], color: iconData.color[0], type: iconData.type[1]}) 
                    }
                </TouchableOpacity>
                {/* // camera flash */}
                <TouchableOpacity style={styles.flashButtonTO} onPress={() => { flash() }}>
                    { (flahstype === 0) ? showIcon({name: iconData.name[4], size: iconData.size[1], color: iconData.color[1], type: iconData.type[1]}) : showIcon({name: iconData.name[4], size: iconData.size[2], color: iconData.color[0], type: iconData.type[1]}) }
                </TouchableOpacity>
                {/* // camera focus */}
                <TouchableOpacity style={styles.focusButtonTO} onPress={() => { focus() }}>
                    { autofocus ? showIcon({name: iconData.name[6], size: iconData.size[2], color: iconData.color[0], type: iconData.type[3]}) : showIcon({name: iconData.name[6], size: iconData.size[1], color: iconData.color[1], type: iconData.type[3]}) }
                </TouchableOpacity>

                {showSnackbarToast(showSnackMsg, snackToastStaticData.photoSaveDuration, showSnack, hideSnackbar)}
            </View>
        </Camera>
        : <View style={styles.viewContainer}>
            <Image style={styles.takenPic} source={{uri: isPicAvailable}}/>
            {/* // save picture */}
            <TouchableOpacity style={styles.savePicTO} onPress={() => {try{savePicToAlbum()}catch(err){console.log(err)}}}>
                { showIcon({name: iconData.name[2], size: iconData.size[2], color: iconData.color[0], type: iconData.type[0]}) }
            </TouchableOpacity>
            {/* // go back */}
            <TouchableOpacity style={styles.retakePicTO} onPress={() => {gotoHome()}}>
                { showIcon({name: iconData.name[3], size: iconData.size[2], color: iconData.color[0], type: iconData.type[2]}) }
            </TouchableOpacity>

            {showSnackbarToast(showSnackMsg, snackToastStaticData.photoSaveDuration, showSnack, hideSnackbar)}
        </View> }
    </View>
  );
}




const leftCameraControlsTopGap = 100;
const iconGap = 45;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  takenPic:{
      flex: 1,
      resizeMode: "cover",
  },
  takePictureButtonTO: {...globalCSS.bottomcenter},
//   takePictureButton: { fontSize: 18, marginBottom: 10, color: 'white' },
  flipButtonTO: {    
    position: "absolute",
    right: 15,
    top: leftCameraControlsTopGap,
  },
  flashButtonTO: {    
    position: "absolute",
    right: 15,
    top: leftCameraControlsTopGap+iconGap,
  },
  focusButtonTO: {    
    position: "absolute",
    right: 15,
    top: leftCameraControlsTopGap+iconGap*2,
  },
  flipButton: { fontSize: 18, marginBottom: 10, color: 'white' },
  savePic: { fontSize: 18, marginBottom: 10, color: 'white' },
  retakePic: { fontSize: 18, marginBottom: 10, color: 'white' },
  retakePicTO: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    position: "absolute",
    right: 5,
    bottom: 5
  },
  savePicTO: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    position: "absolute",
    left: 5,
    bottom: 5,
  }
});


export default CameraComp;
