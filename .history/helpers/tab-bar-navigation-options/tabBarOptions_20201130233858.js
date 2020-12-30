import React from 'react';
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../static-data/colors';
import { StyleSheet } from 'react-native';
import { fonts } from '../static-data/fonts';
// import { loadFonts } from '../static-data/loadAssets';
// loadFonts();

const iconSize = {
    home: 25, 
    profile: 23,
    store: 21,
    cart: 32,
    logout: 20
}

export const screenoption = (navigation, route) => {
    return {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
                return <AntDesign name={iconName} size={iconSize.home} color={color}/>
            } else if (route.name === 'Profile') {
                iconName = focused ? 'user' : 'user';
                return <SimpleLineIcons name={iconName} size={iconSize.profile} color={color}/>;
            } else if (route.name === 'Store') {
                iconName = focused ? 'shopping-store' : 'shopping-store';
                return <Fontisto name={iconName} size={iconSize.store} color={color}/>;
            } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart';
                return <EvilIcons name={iconName} size={iconSize.cart} color={color}/>;
            } else if (route.name === 'Logout') {
                iconName = focused ? 'logout' : 'logout';
                return <SimpleLineIcons name={iconName} size={iconSize.logout} color={color}/>;
            } else if (route.name === 'camera') {
                // iconName = focused ? 'logout' : 'logout';
                // return <SimpleLineIcons name={iconName} size={iconSize.logout} color={color}/>;
                // navigation.setOptions({tabBarVisible: false})
            }           
        }
    }
}


export const tabBarOption = {
    activeTintColor: colors.activeTintColor,
    inactiveTintColor: colors.inactiveTintColor,
    activeBackgroundColor: colors.activeBackgroundColor,
    inactiveBackgroundColor: null,
    style:{
        height: 60,
    },
    tabStyle: {
        padding: 5
    },
    showLabel: true,
    labelStyle: {
        fontFamily: fonts.epiloguevariable,
    },
    keyboardHidesTabBar: false,
}

// const styles = StyleSheet.create({
//     tablabeltext: {
//       fontFamily: fonts.epiloguevariable
//     }
// });


