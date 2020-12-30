import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { fonts } from '../helpers/static-data/fonts';

export function ButtonTypeOne({text, onpress}) {

    // const backgroundColor = {
    //     backgroundColor: backColor
    // }

    return (
        <TouchableOpacity onPress={onpress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,  
        backgroundColor: "#1f6ca6",     
    },
    buttonText: {
        color: 'white',
        // fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
        // fontFamily: fonts.epiloguevariable
    }
});