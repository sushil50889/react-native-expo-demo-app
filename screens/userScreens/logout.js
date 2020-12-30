import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalizeFontSize from '../../helpers/static-data/dynamicFontSize';
import { fonts } from '../../helpers/static-data/fonts';
import { windowWidth, windowHeight } from '../../helpers/static-data/screenWidthHeight';
import statusBarHeight from '../../helpers/statusbar/statusbar';

export default function LogoutScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to {route.name} Screen</Text>
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
});