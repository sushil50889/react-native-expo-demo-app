import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import normalizeFontSize from '../../../helpers/static-data/dynamicFontSize';
import { windowWidth, windowHeight } from '../../../helpers/static-data/screenWidthHeight';
import statusBarHeight from '../../../helpers/statusbar/statusbar';

export default function ProductPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View>
        <View style={{width: windowWidth, height: windowWidth, backgroundColor: 'pink', position: 'absolute', borderRadius: windowWidth}}></View>  
        <Image source={{uri: 'https://res.cloudinary.com/sushilmandi/image/upload/v1608728011/demo-shoe_owsf8m.png'}} style={{width: windowWidth, height: windowHeight * 0.5}}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: statusBarHeight
  },
});