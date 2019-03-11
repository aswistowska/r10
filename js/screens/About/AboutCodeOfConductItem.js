import React from 'react';
import {Text, View} from "react-native";

import {styles} from './styles';

export const AboutCodeOfConductItem = ({conduct}) => {
    return (
        <View>
            <Text style={styles.conductHeader}> + {conduct.title}</Text>
            <Text>{conduct.description}</Text>
        </View>
    )
};
