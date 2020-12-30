import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


export default function LocationMapsScreen({ navigation, route }) {

  useEffect(()=>{

        if (Constants.isDevice) {
  
          Permissions.getAsync(Permissions.LOCATION).then(async (locPer) => {
            if (locPer.status !== 'granted'){
              Permissions.askAsync(Permissions.LOCATION).then((status) => {
                alert(JSON.stringify(status));
                if(status.status !== 'granted'){
                  alert('LOCATION permission not granted');
                }else{
                  alert('LOCATION permission granted');
                }
              }).catch(err => {
                alert('LOCATION permission err  : ', err);
              });            
            }
          }).catch(err=>{
            alert('LOCATION permission err  : ', err);
          });          
          
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