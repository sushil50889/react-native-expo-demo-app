import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function DestinationScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details=null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyAvi8izJBiY5SXocu2gM-UH0cVr6LDpGks',
          language: 'en',
        }}
        autoFillOnNotFound={false}
        currentLocation	={true}
        currentLocationLabel="Current Location"
        enableHighAccuracyLocation={true}
        enablePoweredByContainer={false}
        fetchDetails={false}
        minLength={3}
        autoFocus={true}
        styles={styles.textInputContainer}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  textInputContainer: {
    width: '100%',
    flexDirection: 'row',
  }
});