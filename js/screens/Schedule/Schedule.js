import React from 'react';
import {SectionList, Text, View, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import {styles} from './styles';

const Schedule = ({allSessions, navigation}) => {
    return (
        <SectionList
            sections={allSessions}
            renderItem={({item}) =>
                <View key={item.id}>
                    <Text style={styles.time}>{moment
                        .utc(item.startTime)
                        .utcOffset('-08:00')
                        .format('h:mm A')}</Text>
                    <View style={styles.container}>
                        <TouchableHighlight
                            style={styles.item}
                            onPress={() => navigation.navigate('Session', {sessionDetails: item})}>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.location}>{item.location}</Text>
                            </View>
                        </TouchableHighlight>
                        <Ionicons
                            name='ios-heart'
                            color="gray"
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                </View>
            }
            keyExtractor={(item) => item.id}
        />
    )
};

export default withNavigation(Schedule);