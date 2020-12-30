import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { fonts } from '../helpers/static-data/fonts';

export function ButtonTypeOne({text, onpress}) {

    // const backgroundColor = {
    //     backgroundColor: backColor
    // }

    return (
        <TouchableOpacity onPress={onpress} style={styles.buttonTouchOpacity}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function ButtonTypeTwo({text, onpress}) {

    return (
        <TouchableOpacity onPress={onpress} style={{ width: '100%', marginTop: 10}}>
            <View style={[styles.button]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,  
        backgroundColor: "#1f6ca6",     
    },
    buttonText: {
        color: 'white',
        // fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'center',
        // fontFamily: fonts.epiloguevariable
    },
    buttonTouchOpacity: {
        width: '80%',
        marginTop: 10,
    }
});