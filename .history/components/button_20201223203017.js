import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { fonts } from '../helpers/static-data/fonts';
import { windowWidth, windowHeight } from '../helpers/static-data/screenWidthHeight';

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

export function ButtonTypeTwo({text, onpress, buttonstyle}) {

    return (
        <TouchableOpacity onPress={onpress} style={[{ width: '100%', marginTop: 0 }, ...buttonstyle]}>
            <View style={[styles.button2, {height: windowHeight * 0.07}]}>
                <Text style={styles.buttonText2}>{text}</Text>
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
        marginVertical: 4,
    },
    button2: {
        borderRadius: 0,  
        backgroundColor: "#1f6ca6",     
    },
    buttonText2: {
        color: 'white',
        flex: 1,
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center',
        // fontFamily: fonts.epiloguevariable
    },
    buttonTouchOpacity2: {
        width: '80%',
        marginVertical: 4,
    }
});