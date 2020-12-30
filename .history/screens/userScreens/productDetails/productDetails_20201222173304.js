import * as React from 'react';
import { Image, Text, FlatList, View, StatusBar, Dimensions, StyleSheet, Animated } from 'react-native';
import { productDetailsimages } from '../../../helpers/static-data/dummyData';
const {width, height} = Dimensions.get('screen');
import BottomSheet, { BottomSheetScrollView } from 'reanimated-bottom-sheet'; 

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * .75;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;
const PAGINATION_TOP = (ITEM_HEIGHT / 2) - (DOT_SIZE * productDetailsimages.length / 2) - (DOT_SPACING * productDetailsimages.length / 2);


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

    return <View style={{flex: 1}}>
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
                <Animated.View 
                style={[styles.dotindicator, {
                    transform: [{
                        translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate(
                            {
                                inputRange: [0, 1],
                                outputRange: [0, DOT_INDICATOR_SIZE],
                            }
                        )
                    }]
                }]}
                />
            </View>
        </View>
        <BottomSheet
            initialSnap={0}
            borderRadius={10}
            snapPoints={[height - ITEM_HEIGHT, height]}
        >
            {/* <BottomSheetScrollView>
                <Text>{product.title}</Text>
            </BottomSheetScrollView> */}
        </BottomSheet>
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
        top: PAGINATION_TOP,
        left: 20
    },
    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE,
        marginTop: DOT_SPACING,
        backgroundColor: '#333'
    },
    dotindicator: {
        width: DOT_INDICATOR_SIZE,
        height: DOT_INDICATOR_SIZE,
        borderRadius: DOT_INDICATOR_SIZE,
        borderWidth: 1,
        borderColor: '#333',
        position: 'absolute',
        top: -DOT_SIZE / 2 + 8,
        left: -DOT_SIZE / 2,
    }
})