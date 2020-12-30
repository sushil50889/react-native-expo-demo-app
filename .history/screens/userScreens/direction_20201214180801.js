import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');

export default function DirectionScreen({ navigation, route }) {
    const [map, setMap] = useState(null);

    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyAvi8izJBiY5SXocu2gM-UH0cVr6LDpGks';

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
        <Marker coordinate={origin} anchor={{x: 0.5, y: 0.5}}>
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