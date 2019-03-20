import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {View, Text} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AboutScreen from '../screens/About';
import ScheduleScreen from "../screens/Schedule";

import {sharedNavigationOptions} from './config';
import {colours} from "../config/styles";



const AboutStack = createStackNavigator(
    {
        About: AboutScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    },
);


const ScheduleStack = createStackNavigator(
    {
        Schedule: ScheduleScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    },
);


// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: () => <View><Text>Map</Text></View>,
        Faves: () => <View><Text>Faves</Text></View>,
        About: AboutStack,
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
                } else if (routeName === 'Schedule') {
                    iconName = `ios-calendar`;
                } else if (routeName === 'Map') {
                    iconName = `ios-map`;
                } else if (routeName === 'Faves') {
                    iconName = `ios-heart`;
                }
                return <IconComponent name={iconName} size={25} color={tintColor}/>
            },
        }),
    });