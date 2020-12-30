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

export default () => {
    return <View>
        <StatusBar hidden/>
    </View>
}

const styles = StyleSheet.create({

})