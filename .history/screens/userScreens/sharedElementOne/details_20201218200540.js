import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { sliderData, iconListData } from '../../../helpers/static-data/dummyData';

export default function SharedElementOneDeatilsScreen({ navigation, route }) {
  return (
    <View style={{flex: 1}}>
      <View style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 20
          }}>
              {
                  iconListData.map((item)=>{
                    return (
                        <TouchableOpacity key={item.id} style={{padding: 15}} onPress={()=>{}}>
                            <Image source={{uri: item.imageUri}} style={{width: 60, height: 60}} resizeMode="contain"/>
                        </TouchableOpacity>
                    )
                })
              }
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
    justifyContent: 'center',
  },
});