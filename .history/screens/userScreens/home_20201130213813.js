import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { fonts } from '../../helpers/static-data/fonts';
import { showSnackbarToast, snackToastStaticData } from '../../helpers/toast-message/toast';
// import ToastMessage from '../../helpers/toast-message/toast';
import { ButtonTypeOne } from '../../components/button'

export default function HomeScreen({ navigation, route }) {

  const [showSnack, setshowSnack] = useState(false);
  const [showSnackMsg, setshowSnackMsg] = useState(null);

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
      <Text 
      style={{fontFamily: fonts.epiloguevariable}}
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
  );
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