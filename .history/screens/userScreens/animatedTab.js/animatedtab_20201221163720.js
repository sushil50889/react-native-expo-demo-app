import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, Animated } from 'react-native';
import { animatedTabImages } from '../../../helpers/static-data/dummyData';
import { fonts } from '../../../helpers/static-data/fonts';

const {width, height} = Dimensions.get('screen');

const data = Object.keys(animatedTabImages).map((i) => ({
  key: i,
  title: i,
  image: animatedTabImages[i],
}));

console.log(data);

export default function AnimatedTabs() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <StatusBar hidden />
      <Animated.FlatList
        data={data}
        keyExtractor={(item)=> item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
                return (
                    <View style={{width, height}}>
                        <Image source={{uri: item.image}} style={{flex: 1, resizeMode: 'cover'}}/>
                    </View>
                )
            }
        }
      />
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