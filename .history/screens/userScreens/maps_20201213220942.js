import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import permission from '../../helpers/permission/device-permissions';
import * as Location from 'expo-location';
import mapStaticData from '../../helpers/static-data/maps';
import { logcaptureMessageSentry, logcaptureExceptionSentry } from '../../helpers/sentry/sentry';
// import marker from '../../assets/map/marker-car.png';


export default function LocationMapsScreen({ navigation, route }) {

    const [currentLocation, setCurrentLocation] = useState(null);
    const [map, setMap] = useState(null);
    const markerRef = useRef(null);
    const [markerHeading, setMarkerHeading] = useState(0);
    const [locationAltitude, setLocationAltitude] = useState(0);
    const [locationSubscription, setLocationSubscription] = useState(null);
    const [latlong, setlatlong] = useState(null);

  useEffect(()=>{
      try {
        permission.getLocationPermission().then((pResult)=>{
          if(pResult && pResult.status){
              console.log(pResult);
              getCurrentLocation();
              logcaptureMessageSentry(JSON.stringify(pResult));
          } 
        })       
      } catch (error) {
            console.log(error);
            logcaptureExceptionSentry(error);
      }  
      
      
      return () => {
        try {
          if(locationSubscription){
            locationSubscription.remove();
          }
        } catch (error) {
          console.log(error);
          // logcaptureMessageSentry(error);
          logcaptureExceptionSentry(error);
        }                
      }
  }, []);


  function getCurrentLocation(){
      try {


        // Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High}).then((locdata)=>{
        //   if(locdata){
        //     console.log('location accuracy  :  ', locdata);
            
        //     setLocationAltitude(locdata.coords.altitude);
        //     setMarkerHeading(locdata.coords.heading);

        //     setCurrentLocation({
        //         latitude: locdata.coords.latitude,
        //         longitude: locdata.coords.longitude,
        //         latitudeDelta: 0.09,
        //         longitudeDelta: 0.035,
        //     });
        //     setlatlong({
        //       latitude: locdata.coords.latitude,
        //       longitude: locdata.coords.longitude
        //     });

        //     logcaptureMessageSentry('location fetch successfully');
        //   }
        // }).catch(err =>{
        //   logcaptureExceptionSentry(err);
        // });
        



        Location.watchPositionAsync(
          {accuracy: Location.Accuracy.High, timeInterval: 8000, distanceInterval: 20 }, 
          (location)=>{
            console.log(location);
            // logcaptureMessageSentry(JSON.stringify(location));
            // alert(JSON.stringify(location));
            setLocationAltitude(location.coords.altitude);
            setMarkerHeading(location.coords.heading);
            setlatlong({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            })
            setCurrentLocation({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.09,
              longitudeDelta: 0.035,
            });
            
            markerRef.current.animateMarkerToCoordinate(latlong, 600);
        }).then(locSubs => {
          if(locSubs){
            setLocationSubscription(locSubs);
          }
        });
        
      } catch (error) {
          console.log(error);
          // logcaptureMessageSentry(error);
          logcaptureExceptionSentry(error);
      }
    
  }

  return (
    <View style={styles.container}>
      <MapView 
      ref={m => setMap(m)}
      style={styles.map} 
      provider={PROVIDER_GOOGLE} 
      initialRegion={{
        latitude: 22.7288425,
        longitude: 88.4937687,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      }} 
    //   mapType="hybrid" 
      // customMapStyle={mapStaticData.customMapStyle}
      showsUserLocation={false}
      zoomEnabled={true}
      rotateEnabled={false}
      loadingEnabled={true}
      camera={mapStaticData.cameraOption(latlong, locationAltitude)}
      >
        { 
        currentLocation ? <Marker 
        coordinate={latlong} 
        rotation={markerHeading} 
        anchor={{x: 0.5, y: 0.5}}
        ref={markerRef}
        >
          <Image source={require('../../assets/map/marker-car40.png')}/>
        </Marker> : <Marker 
        coordinate={{
          latitude: 22.7288425,
          longitude: 88.4937687,
        }} 
        rotation={markerHeading} 
        anchor={{x: 0.5, y: 0.5}}
        ref={markerRef}
        >
          <Image source={require('../../assets/map/marker-car40.png')}/>
        </Marker> 
        }        
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