import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


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
        minLength={3}
        autoFocus={false}
        styles={{
          container: {
            flex: 1,
          },
          textInputContainer:{
            width: '100%'
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
  },
  textInputContainer: {
    flex: 1,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});