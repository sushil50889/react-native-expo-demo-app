import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import permission from '../../helpers/permission/device-permissions';


export default function LocationMapsScreen({ navigation, route }) {

  useEffect(async()=>{
      try {
        let pResult = await permission.getLocationPermission(); 
        if(pResult){
          console.log(pResult);
        } 
      } catch (error) {
        console.log(error);
      }            
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} >

      </MapView>
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});