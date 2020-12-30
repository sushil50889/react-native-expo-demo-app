import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { sliderData, iconListData } from '../../../helpers/static-data/dummyData';
import statusBarHeight from '../../../helpers/statusbar/statusbar';
export default function SharedElementOneDeatilsScreen({ navigation, route }) {

  const item = iconListData[0];  
  const ref = useRef();  
  const selectedItemIndex = iconListData.findIndex((i) => i.id === item.id);
  
  
  return (
    <View style={{flex: 1, paddingTop: statusBarHeight}}>
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
          <FlatList
            ref={ref}
            data={iconListData}
            keyExtractor={(item)=> item.id}
            horizontal
            pagingEnabled
            initialScrollIndex={selectedItemIndex}
            nestedScrollEnabled
            getItemLayout={(data, index) => ({
                length: 150,
                offset: 150 * index,
                index,
            })}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return (
                    <ScrollView
                        style={{
                            width: 150 - 20 * 2,
                            margin: 20,
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            borderRadius: 16,
                        }}
                    >
                        <View style={{padding: 20}}>
                            <Text style={{fontSize: 16}}>
                                {Array(50).fill(`${item.title} inner text \n`)}
                            </Text>
                        </View>
                    </ScrollView>
                )
            }}
          />
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