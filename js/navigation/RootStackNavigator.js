import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from "react-navigation";
import AboutContainer from "../screens/About/AboutContainer";
import {View} from "react-native";
import AboutStack from "./NavigationLayout";



const RootStackNavigator = createStackNavigator({
    About: {
        screen: AboutStack,
    }
});

export default createAppContainer(RootStackNavigator);