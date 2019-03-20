import React from 'react';
import {SectionList, Text, View} from 'react-native';

const Schedule = ({allSessions}) => {
    return (
        <SectionList
            sections={allSessions}
            renderItem={({item}) =>
                <View key={item.id}>
                <Text>{item.startTime}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.location}</Text>
                </View>
            }
            keyExtractor={(item) => item.id}
        />
    )
};

export default Schedule;