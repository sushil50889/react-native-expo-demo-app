import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import normalizeFontSize from '../../helpers/static-data/dynamicFontSize';
import { fonts } from '../../helpers/static-data/fonts';
import { setDestinationLocationData } from '../../redux-configuration/actions';
import {connect} from 'react-redux';
import { ButtonTypeOne, ButtonTypeTwo } from '../../components/button';
import { showSnackbarToast, snackToastStaticData } from '../../helpers/toast-message/toast';
import permission from '../../helpers/permission/device-permissions';
import * as Location from 'expo-location';

function DestinationScreen({ navigation, route, destLocationDispatch }) {

  const [isDestinationSelected, setIsDestinationSelected] = useState(false);
  const [showSnack, setshowSnack] = useState(false);
  const [showSnackMsg, setshowSnackMsg] = useState(null);


  useEffect(()=>{
    try {
      permission.getLocationPermission().then((pResult)=>{
        if(pResult && pResult.status){
            console.log('getLocationPermission  :', pResult);
            getCurrentLocation();
        } 
      })       
    } catch (error) {
          console.log(error);
          // logcaptureExceptionSentry(error);
    }  
}, []);


function getCurrentLocation(){
    try {

      Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High}).then((locdata)=>{
        if(locdata){
          console.log('location accuracy  :  ', locdata);
        }
      }).catch(err =>{
        // logcaptureExceptionSentry(err);
      });
      
    } catch (error) {
        console.log(error);
        // logcaptureMessageSentry(error);
        // logcaptureExceptionSentry(error);
    }
  
}


  const gotoDirectionPage = ()=> {
    if(isDestinationSelected){
      navigation.navigate('direction');
    }else if(!isDestinationSelected){
      showSampleToast();
    }    
  }

  const showSampleToast = ()=> {
    setshowSnackMsg(snackToastStaticData.destinationNotFoundErrMessage);
    setshowSnack(true);    
  }
  const hideSnackbar = ()=> {
    setshowSnackMsg(null);
    setshowSnack(false);    
  }



  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
      <GooglePlacesAutocomplete
        placeholder='Search Location'
        onPress={(data, details=null) => {
          // console.log(data);
          // console.log('==========================================================');
          console.log(details.geometry.location);
          setIsDestinationSelected(true);
          destLocationDispatch({latitude: details.geometry.location.lat, longitude: details.geometry.location.lng})
        }}
        query={{
          key: 'AIzaSyAvi8izJBiY5SXocu2gM-UH0cVr6LDpGks',
          language: 'en',
        }}
        autoFillOnNotFound={false}
        currentLocation	={false}
        currentLocationLabel="Current Location"
        enableHighAccuracyLocation={true}
        enablePoweredByContainer={true}
        fetchDetails={true}
        minLength={1}
        autoFocus={false}
        styles={{
          container: {
            flex: 1,
          },
          textInputContainer:{
            width: '100%'
          },
          row: {
            backgroundColor: '#FFFFFF',
            padding: 10,
            height: 34,
            flexDirection: 'row',
          },
          powered: {
            width: 80,
            padding: 0
            // height: 10
          },
          listView: {},
          separator: {
            height: 0.5,
            backgroundColor: '#c8c7cc',
          },
          description: {
            fontFamily: fonts.epiloguevariable,
            fontSize: normalizeFontSize(11)
          },
          loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
          }
        }}
      />
      </View>
      <ButtonTypeTwo onpress={gotoDirectionPage} text='See Direction Route'/>
      {showSnackbarToast(showSnackMsg, snackToastStaticData.defaultDuration, showSnack, hideSnackbar)}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innercontainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10
  }
});



const mapStateToProps = (state) => {
  return {
    destLocation: state.indexReducer.destLocation,
    originLocation: state.indexReducer.originLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    destLocationDispatch: (payload) => dispatch(setDestinationLocationData(payload)), 
    originLocationDispatch: (payload) => dispatch(setOriginLocationData(payload)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationScreen);