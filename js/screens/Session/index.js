import {Component} from "react";
import {View} from "react-native";
import React from "react";
import SessionContainer from './SessionContainer';
import Session from './Session';

export { Session, SessionContainer };

export default class SessionScreen extends Component {

    static navigationOptions = {
        title: 'Session',
    };

    render() {
        return (
            <View>
                <SessionContainer/>
            </View>
        );
    }
}