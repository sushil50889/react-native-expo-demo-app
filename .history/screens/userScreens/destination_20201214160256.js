import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import normalizeFontSize from '../../helpers/static-data/dynamicFontSize';
import { fonts } from '../../helpers/static-data/fonts';
import { setDestinationLocationData } from '../../redux-configuration/actions';
import {connect} from 'react-redux';
import { ButtonTypeOne, ButtonTypeTwo } from '../../components/button';


function DestinationScreen({ navigation, route, destLocationDispatch }) {


  const gotoDirectionPage = ()=> {
    navigation.navigate('direction');
  }



  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search Location'
        onPress={(data, details=null) => {
          // console.log(data);
          // console.log('==========================================================');
          console.log(details.geometry.location);
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
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    marginTop: 10,
    // ...StyleSheet.absoluteFillObject,
  }
});



const mapStateToProps = (state) => {
  return {
    destLocation: state.indexReducer.destLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    destLocationDispatch: (payload) => dispatch(setDestinationLocationData(payload)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationScreen);