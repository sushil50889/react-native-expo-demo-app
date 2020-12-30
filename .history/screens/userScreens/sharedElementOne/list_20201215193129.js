import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import SliderSection from '../../../components/slider';
import { sliderData, iconListData } from '../../../helpers/static-data/dummyData';
import statusBarHeight from '../../../helpers/statusbar/statusbar';


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
        }}>
            {
                iconListData.map((item)=>{
                    return (
                        <TouchableOpacity
                        key={item.id}
                        style={{
                            padding: 10
                        }}
                        onPress={()=>{}}
                        >
                            <Image source={{uri: item.imageUri}} style={{width: 25}} resizeMode='contain'/>
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