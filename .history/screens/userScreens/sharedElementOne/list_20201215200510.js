import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import SliderSection from '../../../components/slider';
import { sliderData, iconListData } from '../../../helpers/static-data/dummyData';


export default function SharedElementOneListScreen({ navigation, route }) {
  return (
    <SafeAreaView style={{flex: 1}}>
        <SliderSection
          results={sliderData}
          title=""
        />
        <View 
        style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
            position: 'absolute',
            bottom: 0
        }}>
            {
                iconListData.map((item)=>{
                    return (
                        <TouchableOpacity key={item.id} style={{padding: 10}} onPress={()=>{}}>
                            <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} style={{width: 50}} resizeMode="contain"/>
                            <Text>dfgdfgdfgdfg</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>        
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 50,
    // ...StyleSheet.absoluteFillObject
  },
});