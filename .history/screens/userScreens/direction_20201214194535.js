import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {connect} from 'react-redux';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');

function DirectionScreen({ navigation, route, destLocation, originLocation }) {

    const [map, setMap] = useState(null);
    const [currentLoc, setcurrentLoc] = useState(null);
    const [locationSubscription, setLocationSubscription] = useState(null);
    const markerRef = useRef(null);
  
    const origin = originLocation;
    const destination = destLocation;
    const GOOGLE_MAPS_APIKEY = 'AIzaSyAvi8izJBiY5SXocu2gM-UH0cVr6LDpGks';

    useEffect(()=>{        
        return () => {
          try {
            if(locationSubscription){
              locationSubscription.remove();
            }
          } catch (error) {
            console.log(error);
          }                
        }
    }, []);

    function watchCurrentLocation(){
        try {  
          Location.watchPositionAsync(
            {accuracy: Location.Accuracy.High, timeInterval: 5000, distanceInterval: 10 }, 
            (location)=>{
            //   console.log(location);
            setcurrentLoc({latitude: location.coords.latitude, longitude: location.coords.longitude});              
            markerRef.current.animateMarkerToCoordinate(latlong, 1000);
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
      // customMapStyle={mapStaticData.customMapStyle}
      showsUserLocation={false}
      zoomEnabled={true}
      rotateEnabled={false}
      loadingEnabled={true}
    //   camera={mapStaticData.cameraOption(latlong, locationAltitude)}
      >
        <Marker coordinate={origin} anchor={{x: 0.5, y: 0.5}} ref={markerRef}>
          <Image source={require('../../assets/map/car-marker-big.png')} style={{width: 20}} resizeMode="contain"/>
        </Marker>
        <Marker coordinate={destination} anchor={{x: 0.5, y: 1}}>
        </Marker>
        <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            onStart={(params) => {
                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
            onReady={result => {
                console.log(`Distance: ${result.distance} km`)
                console.log(`Duration: ${result.duration} min.`)
   
                map.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: (width / 30),
                    bottom: (height / 20),
                    left: (width / 30),
                    top: (height / 20),
                  }
                });

                setcurrentLoc(origin);
                watchCurrentLocation();
            }}
            onError={(errorMessage) => {
                console.log('GOT AN ERROR', errorMessage);
            }}
        />       
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(DirectionScreen);