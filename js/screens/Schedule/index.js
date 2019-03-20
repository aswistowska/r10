import {Component} from "react";
import {View} from "react-native";
import React from "react";
import ScheduleContainer from './ScheduleContainer';
import Schedule from './Schedule';

export { Schedule, ScheduleContainer };

export default class ScheduleScreen extends Component {

    static navigationOptions = {
        title: 'Schedule',
    };

    render() {
        return (
            <View>
                <ScheduleContainer/>
            </View>
        );
    }
}