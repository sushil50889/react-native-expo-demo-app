import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { animatedTabImages } from '../../../helpers/static-data/dummyData';
import { fonts } from '../../../helpers/static-data/fonts';


const data = Object.keys(animatedTabImages).map((i) => ({
  key: i,
  title: i,
  image: animatedTabImages[i],
}));

export default function AnimatedTabs() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 42 }}>❤️</Text>
      <Text
        style={{
          fontFamily: fonts.epiloguevariable,
          marginTop: 10,
          fontWeight: '800',
          fontSize: 16,
        }}
      >
        Expo
      </Text>
      <Text style={{ fontFamily: 'Menlo', fontStyle: 'italic', fontSize: 12 }}>
        (expo.io)
      </Text>
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