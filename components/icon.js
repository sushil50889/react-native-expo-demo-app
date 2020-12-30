import {StyleSheet, View, Image} from 'react-native';


export default function Icon({uri}) {
    return (
        <View style={[styles.imageContainer]}>
            <Image source={{uri}} style={[styles.image]}></Image>
        </View>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 20 * 0.6,
        width: 20 * 0.6,
        resizeMode: 'contain',
    }
});