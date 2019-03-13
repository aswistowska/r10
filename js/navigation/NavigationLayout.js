import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';

import AboutScreen from '../screens/About';
import {sharedNavigationOptions} from './config';
import {colours} from "../config/styles";


const AboutStack = createStackNavigator(
    {
        About: AboutScreen
    },
    {
        navigationOptions: ({navigation}) => ({
            ...sharedNavigationOptions(navigation),
        }),
    }
);

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
    {
        About: AboutStack,
        Settings: () => <View><Text>Lorem ipsum</Text></View>
    },
    {
        tabBarOptions: {
            activeTintColor: colours.white,
            inactiveTintColor: colours.mediumGrey,
            labelStyle: {
                fontSize: 10,
                fontFamily: 'Montserrat'
            },
            style: {
                backgroundColor: colours.black,
            },
        },
        defaultNavigationOptions: ({navigation}) => ({
            ...sharedNavigationOptions(navigation),
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'About') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                }
                return <IconComponent name={iconName} size={25} color={tintColor}/>
            },
        }),
    });