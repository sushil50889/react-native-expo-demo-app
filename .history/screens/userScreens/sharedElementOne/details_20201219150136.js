import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, Animated } from 'react-native';
import BackIcon from '../../../components/backicon';
import { sliderData, iconListData } from '../../../helpers/static-data/dummyData';
import statusBarHeight from '../../../helpers/statusbar/statusbar';
import { SharedElement } from 'react-navigation-shared-element';


function SharedElementOneDeatilsScreen({ navigation, route }) {

  const { item } = route.params;  
  const ref = useRef();  
  const selectedItemIndex = iconListData.findIndex((i) => i.id === item.id);
  const mountedAnimation = useRef(new Animated.Value(0)).current;
  const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current;
  const activeIndexAnimation = useRef(new Animated.Value(selectedItemIndex)).current;

  const animation = (toValue, delay) => {
    return Animated.timing(mountedAnimation, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true
    })
  }

  useEffect(()=>{
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true
      }),

      animation(1, 300)
    ]).start();
  })

  const translateY = mountedAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });
  
  const goBack = ()=>{
    animation(0).start(()=>{
      navigation.goBack();
    })    
  }
  
  return (
    <View style={{flex: 1, paddingTop: statusBarHeight }}>
      <BackIcon onPress={goBack}/>
      <View style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 0,
          overflow: 'scroll'
          }}>
              {
                  iconListData.map((item)=>{
                    return (
                        <TouchableOpacity key={item.id} style={{padding: 15}}>
                            <SharedElement id={`item.${item.id}.icon`}>
                              <Image source={{uri: item.imageUri}} style={{width: 60, height: 60}} resizeMode="contain"/>
                            </SharedElement>
                        </TouchableOpacity>
                    )
                })
              }
          </View>
          <Animated.FlatList
            ref={ref}
            style={{opacity: mountedAnimation, transform: [{translateY}]}}
            data={iconListData}
            keyExtractor={(item)=> item.id}
            horizontal
            pagingEnabled
            initialScrollIndex={selectedItemIndex}
            nestedScrollEnabled
            getItemLayout={(data, index) => ({
                length: 350,
                offset: 350 * index,
                index,
            })}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return (
                    <ScrollView
                        style={{
                            width: 350 - 20 * 2,
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



SharedElementOneDeatilsScreen.sharedElements = (route, otherRoute, showing) => {
  return iconListData.map((item) => `item.${item.id}.icon`);
}

export default SharedElementOneDeatilsScreen;