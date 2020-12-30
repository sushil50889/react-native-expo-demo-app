import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';
import { images } from '../static-data/images';
import { fonts } from '../static-data/fonts';
import { loadFonts } from '../static-data/loadAssets';


const drawerbuttonvalues = {
    size: 30,
    color: '#ffffff',
}


// import{ AuthContext } from '../components/context';

export const DrawerContent = (props) => {

    const [isFontLoaded, setisFontLoaded] = useState(false);

    const paperTheme = useTheme();
    // {fontFamily: isFontLoaded ? fonts.epiloguevariable : null}

    loadFonts().then(data => {
        console.log('asset loaded from drawer   ', data);
        setisFontLoaded(true);
    }).catch(err => {
        console.log('asset load err   ', err);
    })
    
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: images.userImagePlaceHolder
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            labelStyle={}
                            onPress={() => {props.navigation.navigate('Home1')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            labelStyle={}
                            onPress={() => {props.navigation.navigate('Home1')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            labelStyle={}
                            onPress={() => {props.navigation.navigate('Home1')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            labelStyle={}
                            onPress={() => {props.navigation.navigate('Home1')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            labelStyle={{fontFamily: isFontLoaded ? fonts.epiloguevariable : null}}
                            onPress={() => {props.navigation.navigate('Home1')}}
                        />
                    </Drawer.Section>

                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                    
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{fontFamily: isFontLoaded ? fonts.epiloguevariable : null}}
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}






export const drawerButton = (navigation) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.drawerButton}>Menu</Text> */}
            <TouchableOpacity onPress ={()=>navigation.toggleDrawer()}>
                <Entypo name="menu" size={drawerbuttonvalues.size} color={drawerbuttonvalues.color}/>
            </TouchableOpacity>
        </View>        
    )
}







const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 10,  
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerButton: {
        color: '#ffffff',
    },
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        // fontFamily: fonts.epiloguevariable,
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        // fontFamily: fonts.epiloguevariable,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
});