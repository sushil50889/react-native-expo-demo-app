import * as React from 'react';
import { Image, FlatList, View, StatusBar, Dimensions, StyleSheet, Animated } from 'react-native';
import { productDetailsimages } from '../../../helpers/static-data/dummyData';
const {width, height} = Dimensions.get('screen');

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * .75;
const DOT_SIZE = 8;

const product = {
    title: 'SOFT MINI CROSSBODY BAG WITH KISS LOCK',
    description: [
        'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
    ],
    price: '29.99£'
}

export default function ProductDetails () {
    const scrollY = React.useRef(new Animated.Value(0)).current;

    return <View>
        <StatusBar hidden/>
        <View style={{height: ITEM_HEIGHT, overflow: 'hidden'}}>
            <Animated.FlatList
                data={productDetailsimages}
                keyExtractor={(_, index)=> index.toString()}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate='fast'
                showsVerticalScrollIndicator={false}
                bounces={false}
                onScroll={
                    Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true}
                    )
                }
                renderItem={({item}) => {
                    return (
                    <View>
                        <Image source={{uri: item }} style={styles.carouselimages}/>
                    </View>
                    )
                }}
            />
            <View style={styles.pagination}>
                {
                    productDetailsimages.map((_, index) => {
                        return <View key={index} style={[styles.dot]}></View>
                    })
                }
            </View>
        </View>
        
    </View>
}

const styles = StyleSheet.create({
    carouselimages: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        resizeMode: 'cover'
    },
    pagination: {
        position: 'absolute',
        top: 100,
        left: 20
    },
    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE,
        backgroundColor: '#333'
    }
})