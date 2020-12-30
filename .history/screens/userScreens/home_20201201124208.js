import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { fonts } from '../../helpers/static-data/fonts';
import { showSnackbarToast, snackToastStaticData } from '../../helpers/toast-message/toast';
// import ToastMessage from '../../helpers/toast-message/toast';
import { ButtonTypeOne } from '../../components/button';
// import { loadFonts } from '../../helpers/static-data/loadAssets';
import {tabBarOption } from '../../helpers/tab-bar-navigation-options/tabBarOptions';
import {connect} from 'react-redux';
import * as Font from 'expo-font';
import { registerForPushNotificationsAsync } from '../../helpers/push-notification/pushNotification';
import { setPushTokenData } from '../../redux-configuration/actions';


 const HomeScreen = (props) => {

  const { navigation, route, tokenDispatch } = props;

  const [showSnack, setshowSnack] = useState(false);
  const [showSnackMsg, setshowSnackMsg] = useState(null);
  const [isFontLoaded, setisFontLoaded] = useState(false);

  useEffect(()=> {

    registerForPushNotificationsAsync().then((data)=>{
      console.log('token  ccccccc  : ', data);
      tokenDispatch(data);
    }).catch((err)=>{
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
    
  }, []);

  

  const onPressHome2 = ()=> {
    navigation.navigate('Home2')
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



  return (
    <View style={styles.container}>
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

      <ButtonTypeOne onpress={onPressHome2} text='Custom Button'/>

      {showSnackbarToast(showSnackMsg, snackToastStaticData.defaultDuration, showSnack, hideSnackbar)}
      <StatusBar style="auto" />
    </View>
  )



}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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