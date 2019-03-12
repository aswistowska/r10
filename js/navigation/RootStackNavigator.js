import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import AboutStack from "./NavigationLayout";
import {colours} from "../config/styles";


const RootStackNavigator = createStackNavigator(
    {
        About: {
            screen: AboutStack,
        }
    },
    {
        headerMode: 'none',

    }
);

export default createAppContainer(RootStackNavigator);