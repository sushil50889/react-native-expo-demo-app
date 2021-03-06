import * as React from 'react';
import { Image, FlatList, View, StatusBar, Dimensions, StyleSheet } from 'react-native';
import { productDetailsimages } from '../../../helpers/static-data/dummyData';
const {width, height} = Dimensions.get('screen');

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * .75;

const product = {
    title: 'SOFT MINI CROSSBODY BAG WITH KISS LOCK',
    description: [
        'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
    ],
    price: '29.99£'
}

export default function ProductDetails () {
    return <View>
        <StatusBar hidden/>
        <View style={{height: ITEM_HEIGHT, overflow: 'hidden'}}>
            <FlatList
                data={productDetailsimages}
                keyExtractor={(_, index)=> index.toString()}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate='fast'
                renderItem={({item}) => {
                    return <View><Image source={{uri: item }} style={styles.carouselimages}/></View>
                }}
            />
        </View>
        <FlatList
            data={productDetailsimages}
            keyExtractor={(_, index)=> index.toString()}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate='fast'
            showsVerticalScrollIndicator={false}
            bounces={false}
            renderItem={({item}) => {
                return (
                <View>
                    <Image source={{uri: item }} style={styles.carouselimages}/>
                </View>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    carouselimages: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        resizeMode: 'cover'
    }
})