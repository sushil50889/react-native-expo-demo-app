import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import permission from '../../helpers/permission/device-permissions';
import * as Location from 'expo-location';
import mapStaticData from '../../helpers/static-data/maps';


export default function LocationMapsScreen({ navigation, route }) {

    const [currentLocation, setCurrentLocation] = useState(null);
    const [map, setMap] = useState(null);

  useEffect(()=>{
      try {
        permission.getLocationPermission().then((pResult)=>{
            if(pResult){
                console.log(pResult);
                getCurrentLocation();
            } 
        }).catch(err=>{
            console.log(err);
        });        
      } catch (error) {
            console.log(error);
      }            
  }, []);


  async function getCurrentLocation(){
    let locdata = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
    if(locdata){
        console.log('location accuracy  :  ', locdata);
        setCurrentLocation({
            latitude: locdata.coords.latitude,
            longitude: locdata.coords.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
        });
    }
  }

  return (
    <View style={styles.container}>
      <MapView 
      ref={m => setMap(m)}
      style={styles.map} 
      provider={PROVIDER_GOOGLE} 
      initialRegion={currentLocation} 
    //   mapType="hybrid" 
      customMapStyle={mapStaticData.customMapStyle}
      showsUserLocation={false}
      zoomEnabled={true}
      rotateEnabled={false}
      loadingEnabled={true}
      >

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