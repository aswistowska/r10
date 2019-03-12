import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {View} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import AboutContainer from "../screens/About/AboutContainer";
import {colours} from "../config/styles";

class AboutScreen extends Component {

    static navigationOptions = {
        title: 'About',
    };

    render() {
        return (
            <View>
                <AboutContainer/>
            </View>
        );
    }
}

const AboutStack = createStackNavigator({
    About: AboutScreen
});

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
    {AboutStack},
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 10
            },
            style: {
                backgroundColor: 'black'
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'About') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
    });