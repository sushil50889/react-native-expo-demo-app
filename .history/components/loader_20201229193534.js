import * as React from 'react';
import {
      Text,
      View,
      StyleSheet,
      Dimensions,
    } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Video } from 'expo-av';



export function Loader() {
    return (
        <View style={styles.loadingContainer}>
            <Video
            source={require('../assets/lottijson/cube.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: width*0.4, height: width*0.4 }}
        />
        </View>
  )
}


const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
});