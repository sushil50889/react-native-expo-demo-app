import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { fonts } from '../../helpers/static-data/fonts';


export default function DestinationScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search Location'
        onPress={(data, details=null) => {
          console.log(data);
          console.log('==========================================================');
          console.log(details);
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
            padding: 8,
            height: 36,
            flexDirection: 'row',
          },
          listView: {},
          separator: {
            height: 0.5,
            backgroundColor: '#c8c7cc',
          },
          description: {
            fontFamily: fonts.epiloguevariable,
            fontSize: 12
          },
          loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 100,
    ...StyleSheet.absoluteFillObject,
  }
});