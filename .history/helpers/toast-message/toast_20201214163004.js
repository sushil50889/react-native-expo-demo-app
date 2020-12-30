import React, {useState} from 'react';
import { ToastAndroid, StyleSheet, Text } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { colors } from '../static-data/colors';
import { fonts } from '../static-data/fonts';


export const snackToastStaticData = {
  defaultDuration: 4000,
  customDuration: 5000,
  photoSaveDuration: 1500,
  testMessage: 'Showing React Native Snackbar',
  assetSavedMessage: 'Relax, Photo Saved To Gallary',
  assetSavedErrMessage: 'Sorry, Asset not saved. Try again',
  destinationNotFoundErrMessage: 'Sorry, Asset not saved. Try again',
  assetNotFound: 'Sorry, Asset not found',
  buttonText: () => <Text style={styles.buttontextcolor}>Okey</Text>,
  cancelButtonText: 'Cancel buttom for Toast',
}


export const showSampleToast = (msg=null, time='L', position='B')=> {    
    const timeStay = (time === 'L') ? ToastAndroid.LONG : ToastAndroid.SHORT;
    const showPosition = (position === 'B') ? ToastAndroid.BOTTOM : ToastAndroid.TOP;
    if(msg){
      ToastAndroid.showWithGravityAndOffset(msg, timeStay, showPosition, 25, 50);
    }        
}


export const showSnackbarToast = (msg=null, duration=snackToastStaticData.defaultDuration, visible=false, hideSnackbar)=> { 

  function onDismissSnackBar(){
    // console.log(' Snack Bar Dismissed... ');
    hideSnackbar();
  }
  
  return (<Snackbar
        visible={(visible && msg) ? true : false}
        duration={duration}
        style={styles.backcolor}
        onDismiss={onDismissSnackBar}
        action={{
          label: snackToastStaticData.buttonText(),
          accessibilityLabel: snackToastStaticData.cancelButtonText,
          onPress: () => {
            // console.log('user pressed okey on snackbar');
            hideSnackbar();
          },
        }}>
        <Text style={styles.textcolor}>{msg}</Text>
  </Snackbar>)
      
}



const styles = StyleSheet.create({
  backcolor: {
    backgroundColor: colors.toastBackgroud,
  },
  textcolor: {
    color: colors.toastMsgColor,
    // fontFamily: fonts.epiloguevariable,
  },
  buttontextcolor: {
    color: colors.toastBtnColor,
    // fontFamily: fonts.epiloguevariable,
  }
});


