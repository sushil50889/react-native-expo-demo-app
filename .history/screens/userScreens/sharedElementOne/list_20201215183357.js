import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-vector-icons';
import SliderSection from '../../../components/slider';
import { sliderData } from '../../../helpers/static-data/dummyData';



export default function SharedElementOneListScreen({ navigation, route }) {
  return (
    <SafeAreaView style={{flex: 1}}>
        <SliderSection
          results={sliderData}
          title="Cost Effective"
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
                DataCue.map((item)=>{
                    return (
                        <TouchableOpacity
                        key={item.id}
                        style={{
                            padding: 10
                        }}
                        onPress={()=>{}}
                        >
                            <Icon uri={item.imageUri}></Icon>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    </SafeAreaView>
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