import React, {Component} from "react";
import SpeakerContainer from './SpeakerContainer';
import Speaker from './Speaker';
import {View} from "react-native";

export { Speaker, SpeakerContainer };

export default class SpeakerScreen extends Component {

    static navigationOptions = {
        title: 'About the Speaker',
    };

    render() {
        return (
            <View>
                <SpeakerContainer/>
            </View>
        );
    }
}