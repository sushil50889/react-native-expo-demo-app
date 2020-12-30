import React, {useState} from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/userScreens/home';
import ProfileScreen from '../screens/userScreens/profile';
import CartScreen from '../screens/userScreens/cart';
import LogoutScreen from '../screens/userScreens/logout';
import StoreScreen from '../screens/userScreens/store';
import CameraScreen from '../screens/userScreens/camera';
import LocationMapsScreen from '../screens/userScreens/maps';
import DestinationScreen from '../screens/userScreens/destination';
import DirectionScreen from '../screens/userScreens/direction';

import {screenoption, tabBarOption } from '../helpers/tab-bar-navigation-options/tabBarOptions';
import { drawerButton } from '../helpers/drawer-menu/drawer';
import {
  screenOptionForComponentsHomeTab,
  screenOptionForComponentsProfileTab,
  screenOptionForComponentsStoreTab,
  screenOptionForComponentsCartTab,
  screenOptionForComponentsLogoutTab
} from '../helpers/screen-navigation-options/screenOptions';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../helpers/drawer-menu/drawer';
import { AppLoading } from 'expo';
import SharedElementOneListScreen from '../screens/userScreens/sharedElementOne/list';
import SharedElementOneDeatilsScreen from '../screens/userScreens/sharedElementOne/details';
import { Easing } from 'react-native';


// asyncStore.clearAllStorage();

const Drawer = createDrawerNavigator();


  const homeTabStack = createStackNavigator();
  const Stack = createStackNavigator();
    
  function homeTabStackScreens({navigation}) {
    return (
        <homeTabStack.Navigator 
        initialRouteName="Home1"
         screenOptions={({ route }) => (screenOptionForComponentsHomeTab(route))}
         >
          <homeTabStack.Screen name="Home1" component={HomeScreen} options={{ headerLeft: () => drawerButton(navigation) }}/>
          <homeTabStack.Screen name="Home2" component={ProfileScreen}/>
          <homeTabStack.Screen name="Home3" component={CartScreen}/>
          <homeTabStack.Screen name="Home4" component={LogoutScreen}/>
          <homeTabStack.Screen name="Home5" component={StoreScreen}/>
        </homeTabStack.Navigator>
    );
  }

  const profileTabStack = createStackNavigator();
    
  function profileTabStackScreens({navigation}) {
    return (
        <profileTabStack.Navigator initialRouteName="Profile1" screenOptions={({ route }) => (screenOptionForComponentsProfileTab(route))}>

          <profileTabStack.Screen name="Profile1" component={HomeScreen} options={{headerLeft: () => drawerButton(navigation)}}/>
          <profileTabStack.Screen name="Profile2" component={ProfileScreen}/>
          <profileTabStack.Screen name="Profile3" component={CartScreen}/>
          <profileTabStack.Screen name="Profile4" component={LogoutScreen}/>
          <profileTabStack.Screen name="Profile5" component={StoreScreen}/>

        </profileTabStack.Navigator>
    );
  }

  const storeTabStack = createStackNavigator();
    
  function storeTabStackScreens({navigation}) {
    return (
        <storeTabStack.Navigator initialRouteName="store1" screenOptions={({ route }) => (screenOptionForComponentsStoreTab(route))}>

          <storeTabStack.Screen name="store1" component={HomeScreen} options={{headerLeft: () => drawerButton(navigation)}}/>
          <storeTabStack.Screen name="store2" component={ProfileScreen}/>
          <storeTabStack.Screen name="store3" component={CartScreen}/>
          <storeTabStack.Screen name="store4" component={LogoutScreen}/>
          <storeTabStack.Screen name="store5" component={StoreScreen}/>

        </storeTabStack.Navigator>
    );
  }

  const cartTabStack = createStackNavigator();
    
  function cartTabStackScreens({navigation}) {
    return (
        <cartTabStack.Navigator initialRouteName="cart1" screenOptions={({ route }) => (screenOptionForComponentsCartTab(route))}>

          <cartTabStack.Screen name="cart1" component={HomeScreen} options={{headerLeft:  () => drawerButton(navigation)}}/>
          <cartTabStack.Screen name="cart2" component={ProfileScreen}/>
          <cartTabStack.Screen name="cart3" component={CartScreen}/>
          <cartTabStack.Screen name="cart4" component={LogoutScreen}/>
          <cartTabStack.Screen name="cart5" component={StoreScreen}/>

        </cartTabStack.Navigator>
    );
  }


  const logoutTabStack = createStackNavigator();
    
  function logoutTabStackScreens({navigation}) {
    return (
        <logoutTabStack.Navigator initialRouteName="logout1" screenOptions={({ route }) => (screenOptionForComponentsLogoutTab(route))}>

          <logoutTabStack.Screen name="logout1" component={HomeScreen} options={{headerLeft:  () => drawerButton(navigation)}}/>
          <logoutTabStack.Screen name="logout2" component={ProfileScreen}/>
          <logoutTabStack.Screen name="logout3" component={CartScreen}/>
          <logoutTabStack.Screen name="logout4" component={LogoutScreen}/>
          <logoutTabStack.Screen name="logout5" component={StoreScreen}/>

        </logoutTabStack.Navigator>
    );
  }





  
  const Tab = createBottomTabNavigator();
  
  function authenticatedUserTabStack() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => (screenoption(navigation, route))}
        tabBarOptions={tabBarOption}
      >

        <Tab.Screen name="Home" component={homeTabStackScreens}/>
        <Tab.Screen name="Profile" component={profileTabStackScreens}/>
        <Tab.Screen name="Store" component={storeTabStackScreens}/>
        <Tab.Screen name="Cart" component={cartTabStackScreens}/>
        <Tab.Screen name="Logout" component={logoutTabStackScreens}/>

      </Tab.Navigator>
    )
  }


  const SharedElemStack = createSharedElementStackNavigator();

  function SharedElementStack() {
    return (
        <SharedElemStack.Navigator initialRouteName="SEListOne">
          <SharedElemStack.Screen name="SEListOne" 
          component={SharedElementOneListScreen} 
          options={{
            unmountOnBlur: false, 
            title: 'Shared Elem Transition One',
            headerShown: false,
            headerLeft: ()=> null
          }}/>
          <SharedElemStack.Screen name="SEDetailsOne" 
          component={SharedElementOneDeatilsScreen} 
          options={{
            unmountOnBlur: false, 
            title: 'Shared Elem Transition One',
            headerShown: false,
            headerLeft: ()=> null,
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: 'timing', config: {duration: 300, easing: Easing.inOut(Easing.ease)}},
              close: { animation: 'timing', config: {duration: 300, easing: Easing.inOut(Easing.ease)}},
            },
            cardStyleInterpolator: ({current: {progress}})=>{
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }
          }}/>
        </SharedElemStack.Navigator>
    )
  }


  function authenticatedUserDrawerStack() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="My Account" component={authenticatedUserTabStack} />
          <Drawer.Screen name="camera" component={CameraScreen} options={{unmountOnBlur: true}}/>
          <Drawer.Screen name="currentLocation" component={LocationMapsScreen} options={{unmountOnBlur: false}}/>
          <Drawer.Screen name="destination" 
          component={DestinationScreen} 
          options={{
            unmountOnBlur: false, 
            title: 'Destination',
            // headerStyle: {
            //   backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerShown: true,
            headerLeft: ()=> null
          }}/>
          <Drawer.Screen name="direction" 
          component={DirectionScreen} 
          options={{
            unmountOnBlur: false, 
            title: 'Direction',
            headerShown: true,
            headerLeft: ()=> null
          }}/>
          <Drawer.Screen name="SEListOneStack" component={SharedElementStack}/>
          <Drawer.Screen name="moviecarousel" component={}/>
        </Drawer.Navigator>
    )
  }


  // function MainUserStack() {
  //   return (
  //     <Stack.Navigator initialRouteName="Main">
  //       <Stack.Screen name="Main" component={authenticatedUserDrawerStack}/>
  //       <Stack.Screen name="camera" component={CameraScreen}/>
  //     </Stack.Navigator>
  //   );
  // }
  
  export default authenticatedUserDrawerStack;