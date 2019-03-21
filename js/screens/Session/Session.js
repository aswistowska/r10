import React from 'react';
import {ScrollView, Text, View, Image, Button, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

const Session = ({navigation}) => {
    const session = navigation.getParam('sessionDetails', {});
    console.log(session);
    return (
        <ScrollView>
                <View key={session.id}>
                    <Text>{session.location}</Text>
                    <Ionicons
                        name='ios-heart'
                        color="red"
                        backgroundColor='transparent'
                        size={20}
                    />
                    <Text>{session.title}</Text>
                    <Text>{session.startTime}</Text>
                    <Text>{session.description}</Text>
                    <Text>Presented by:</Text>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Speaker', {speakerDetails: session})}>
                        <View>
                    <Image source={{
                        uri: `${session.speaker.image}`}}
                           style={{width: 50, height: 50}}/>
                    <Text>{session.speaker.name}</Text>
                        </View>
                    </TouchableHighlight>
                    <Button
                        title="Remove from Faves"
                        onPress={() => {alert('Removed from faves')}}
                    />
                </View>
        </ScrollView>
    )
};

export default withNavigation(Session);