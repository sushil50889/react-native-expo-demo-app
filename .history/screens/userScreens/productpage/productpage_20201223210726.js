import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import normalizeFontSize from '../../../helpers/static-data/dynamicFontSize';
import { fonts } from '../../../helpers/static-data/fonts';
import { windowWidth, windowHeight } from '../../../helpers/static-data/screenWidthHeight';
import statusBarHeight from '../../../helpers/statusbar/statusbar';
import { sliderData, iconListData } from '../../../helpers/static-data/dummyData';
import SliderSection, {SliderSection2} from '../../../components/slider';
import { ButtonTypeTwo, ButtonTypeOne } from '../../../components/button';
const BACK_CIRCLE_SIZE = 1.5;

export default function ProductPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View>
        <View style={{
            width: windowWidth * BACK_CIRCLE_SIZE, 
            height: windowWidth * BACK_CIRCLE_SIZE, 
            backgroundColor: '#eba08d', 
            position: 'absolute', 
            borderRadius: windowWidth * BACK_CIRCLE_SIZE,
            top: '-60%',
            left: '-1.5%'
            }}>
        </View>  
        <Image source={{uri: 'https://res.cloudinary.com/sushilmandi/image/upload/v1608728011/demo-shoe_owsf8m.png'}} style={{width: windowWidth, height: windowHeight * 0.5}}/>
      </View>
      <ScrollView contentContainerStyle={styles.scrollcontainer} showsVerticalScrollIndicator={false}>
      <View style={{
          flexDirection: 'row', 
        //   backgroundColor: '#ccc', 
          justifyContent: 'space-between', 
          width: windowWidth, 
          paddingHorizontal: 10,
          marginTop: 10
          }}>
          <Text style={{
            fontFamily: fonts.mitrRegular,
            fontSize: normalizeFontSize(26),
            fontWeight: 'bold',
            color: '#393939'
          }}>
                Air-Max-270
            </Text>
          <Text style={{
            fontFamily: fonts.mitrRegular,
            fontSize: normalizeFontSize(26),
            fontWeight: 'bold',
            color: '#393939'
          }}>$150.00</Text>
      </View>
      <View style={{ 
        //   backgroundColor: '#ccc',  
          width: windowWidth, 
          paddingHorizontal: 10,
          marginVertical: 14
          }}>
              <Text style={{
            fontFamily: fonts.epiloguevariable,
            fontSize: normalizeFontSize(14),
            color: '#bfbfbf',
            textAlign: 'justify'
          }}>The Nike Air Max 270 amps up an icon with a huge Max Air unit for cushioning under every steps. It features a stretchy inner sleeve for a snug, sock-like fit.</Text>

<Text style={{
            fontFamily: fonts.epiloguevariable,
            fontSize: normalizeFontSize(14),
            color: '#bfbfbf',
            textAlign: 'justify'
          }}>The Nike Air Max 270 amps up an icon with a huge Max Air unit for cushioning under every steps. It features a stretchy inner sleeve for a snug, sock-like fit.</Text>

<Text style={{
            fontFamily: fonts.epiloguevariable,
            fontSize: normalizeFontSize(14),
            color: '#bfbfbf',
            textAlign: 'justify'
          }}>The Nike Air Max 270 amps up an icon with a huge Max Air unit for cushioning under every steps. It features a stretchy inner sleeve for a snug, sock-like fit.</Text>

<Text style={{
            fontFamily: fonts.epiloguevariable,
            fontSize: normalizeFontSize(14),
            color: '#bfbfbf',
            textAlign: 'justify'
          }}>The Nike Air Max 270 amps up an icon with a huge Max Air unit for cushioning under every steps. It features a stretchy inner sleeve for a snug, sock-like fit.</Text>

<Text style={{
            fontFamily: fonts.epiloguevariable,
            fontSize: normalizeFontSize(14),
            color: '#bfbfbf',
            textAlign: 'justify'
          }}>The Nike Air Max 270 amps up an icon with a huge Max Air unit for cushioning under every steps. It features a stretchy inner sleeve for a snug, sock-like fit.</Text>

          <Text style={{
              textTransform: 'uppercase', 
              textAlign: 'left',
              marginTop: 18,
              fontFamily: fonts.epiloguevariable,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              fontSize: normalizeFontSize(13),
              }}>more details</Text>
          </View>
          <View style={{
          flexDirection: 'row', 
        //   backgroundColor: '#ccc', 
          justifyContent: 'space-between', 
          width: windowWidth, 
          paddingHorizontal: 10,
          marginTop: 15,
          marginBottom: 25
          }}>
          <Text style={{
            fontFamily: fonts.epiloguevariable,
            fontSize: normalizeFontSize(20),
            fontWeight: 'bold',
            color: '#393939'
          }}>
                Size
            </Text>
          <Text style={{
            fontFamily: fonts.epiloguevariable,
            fontSize: normalizeFontSize(20),
            fontWeight: 'bold',
            color: '#393939'
          }}>UK <Text style={{color: '#bfbfbf'}}>USA</Text></Text>
      </View>
      <SliderSection2 results={sliderData} title=""/>
      </ScrollView>
      <View style={{width: windowWidth, position: 'absolute', bottom: 0, paddingHorizontal: 10}}>
        <ButtonTypeTwo text='Proceed To Payment' buttonstyle={{borderRadius: 10, backgroundColor: '#f93b67', height: windowHeight * 0.07}}/>
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
    // justifyContent: 'center',
    paddingTop: statusBarHeight
  },
  scrollcontainer: {
      // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    paddingBottom: 25
    // minHeight: windowHeight * 0.875
  }
});