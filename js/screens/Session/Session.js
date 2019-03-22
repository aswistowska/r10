import React from 'react';
import {ScrollView, Text, View, Image, Button, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import {styles} from './styles'
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";

const Session = ({navigation}) => {
    const session = navigation.getParam('sessionDetails', {});
    console.log(session);
    return (
        <ScrollView>
            <View key={session.id} style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.subtitle}>{session.location}</Text>
                    <Ionicons
                        name='ios-heart'
                        color="red"
                        backgroundColor='transparent'
                        size={20}
                    />
                </View>
                <Text style={styles.title}>{session.title}</Text>
                <Text style={styles.time}>{moment
                    .utc(session.startTime)
                    .utcOffset('-08:00')
                    .format('h:mm A')}</Text>
                <Text style={styles.description}>{session.description}</Text>
                <Text style={styles.subtitle}>Presented by:</Text>
                <TouchableHighlight
                    onPress={() => navigation.navigate('Speaker', {speakerDetails: session})}>
                    <View style={styles.speakerSection}>
                        <Image source={{
                            uri: `${session.speaker.image}`
                        }}
                               style={styles.speakerImage}/>
                        <Text style={styles.speakerText}>{session.speaker.name}</Text>
                    </View>
                </TouchableHighlight>
                <ButtonGradient
                    buttonText='Remove from Faves'
                    onPress={() => {
                        alert('Removed from faves')
                    }}
                />
            </View>
        </ScrollView>
    )
};

export default withNavigation(Session);