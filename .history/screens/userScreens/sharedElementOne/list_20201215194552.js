import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import SliderSection from '../../../components/slider';
import { sliderData, iconListData } from '../../../helpers/static-data/dummyData';
import statusBarHeight from '../../../helpers/statusbar/statusbar';


export default function SharedElementOneListScreen({ navigation, route }) {
  return (
    <SafeAreaView style={{flex: 1}}>
        {/* <SliderSection
          results={sliderData}
          title=""
        /> */}
        <View 
        style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
            position: 'absolute'
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
                            <Image source={{uri: 'https://res.cloudinary.com/sushilmandi/image/upload/v1608034776/country-flag-png/guam_h5c28e.png'}}/>
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