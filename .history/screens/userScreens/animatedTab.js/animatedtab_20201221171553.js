import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, Animated } from 'react-native';
import { animatedTabImages } from '../../../helpers/static-data/dummyData';
import normalizeFontSize from '../../../helpers/static-data/dynamicFontSize';
import { fonts } from '../../../helpers/static-data/fonts';

const {width, height} = Dimensions.get('screen');

const data = Object.keys(animatedTabImages).map((i) => ({
  key: i,
  title: i,
  image: animatedTabImages[i],
}));

// console.log(data);
const Tab= ({item})=>{
    return (
        <View>
            <Text style={{color: 'white', fontSize: normalizeFontSize(85/data.length), fontFamily: fonts.epiloguevariable, textTransform: 'uppercase'}}>{item.title}</Text>
        </View>
    )
}

const Tabs= ({scrollx, data})=>{
    return (
        <View style={{position: 'absolute', width, top: 75}}>
            <View style={{
                // backgroundColor: 'white',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
                }}>
                {data.map((item)=>{
                    return <Tab key={item.key} item={item}/>
                })}
            </View>
        </View>
    )
}

const Indicator = () => {
    return (
        <View style={{
            position: 'absolute',
            height: 4,
            width: 100,
            backgroundColor: 'white',
            bottom: -100
        }}/>
    )
}

export default function AnimatedTabs() {
    const scrollX = useRef(new Animated.Value(0)).current;
    console.log('scrollX  :  ', scrollX);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.FlatList
        data={data}
        keyExtractor={(item)=> item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={
            Animated.event(
                [{
                    nativeEvent: {contentoffset: {x: scrollX}}
                }],
                {useNativeDriver: false}
            )
        }
        renderItem={({item}) => {
                return (
                    <View style={{width, height}}>
                        <Image source={{uri: item.image}} style={{flex: 1, resizeMode: 'cover'}}/>
                        <View style={[StyleSheet.absoluteFillObject, {backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}/>
                    </View>
                )
            }
        }
      />

      <Tabs scrollx={scrollX} data={data}/>
      <Indicator/>
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