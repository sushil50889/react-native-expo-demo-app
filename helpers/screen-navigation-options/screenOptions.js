import React from 'react';
import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../static-data/colors';

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
}

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });
  
    return {
      leftButtonStyle: { opacity },
      rightButtonStyle: { opacity },
      titleStyle: { opacity },
      backgroundStyle: { opacity },
    };
  };

const others = {
    headerStyle: {
        backgroundColor: colors.headerBackgroundColor,
        height: 60
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        // fontFamily: fonts.epiloguevariable, 
    },
    headerTitleAlign: 'center',
    headerBackTitle: null,
    headerBackAccessibilityLabel: 'Go Back',
    headerBackTitleVisible: false,
    headerTruncatedBackTitle: null,
    headerRight: null,
    // headerLeft: null,
    // header:{
    //     mode: 'screen',
    // },
    animationEnabled: true,
    gestureEnabled: false,
    transitionSpec: {
        open: config,
        close: config,
    },
    headerStyleInterpolator: forFade,
}

export const screenOptionForComponentsHomeTab = (route)=> {
    return { title: 'Home', ...others}
}


export const screenOptionForComponentsProfileTab = (route)=> {
    return {
        title: 'Profile',
        ...others
    }
}


export const screenOptionForComponentsStoreTab = (route)=> {
    return {
        title: 'Store',
        ...others
    }
}


export const screenOptionForComponentsCartTab = (route)=> {
    return {
        title: 'Cart',
        ...others
    }
}


export const screenOptionForComponentsLogoutTab = (route)=> {
    return {
        title: 'Logout',
        ...others
    }
}



// export const option = {
//     title: 
// }