import React from 'react';
import {SectionList, Text, View, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';


const Schedule = ({allSessions, navigation}) => {
    return (
        <SectionList
            sections={allSessions}
            renderItem={({item}) =>
                <View key={item.id}>
                    <Text>{item.startTime}</Text>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Session', {sessionDetails: item})}>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.location}</Text>
                        </View>
                    </TouchableHighlight>
                    <Ionicons
                        name='ios-heart'
                        color="red"
                        backgroundColor="transparent"
                        size={20}
                    />
                </View>
            }
            keyExtractor={(item) => item.id}
        />
    )
};

export default withNavigation(Schedule);