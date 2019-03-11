import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {View} from "react-native";
import AboutContainer from "../screens/About/AboutContainer";

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
export default createBottomTabNavigator(AboutStack);