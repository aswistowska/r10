import AboutContainer from './AboutContainer';
import About from './About';
import {Component} from "react";
import {View} from "react-native";
import React from "react";

export { About, AboutContainer };

export default class AboutScreen extends Component {

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