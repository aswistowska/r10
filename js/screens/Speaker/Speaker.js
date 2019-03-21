import React from 'react';
import {ScrollView, Text, View, Image, Button} from 'react-native';
import { withNavigation } from 'react-navigation';

const Speaker = ({navigation}) => {
    const speaker = navigation.getParam('speakerDetails', {});
    return (
        <ScrollView>
            <View key={speaker.id}>
                <Image source={{
                    uri: `${speaker.speaker.image}`}}
                       style={{width: 200, height: 200}}/>
                <Text>{speaker.speaker.name}</Text>
                <Text>{speaker.speaker.bio}</Text>
                <Button
                    title="Read more on Wikipedia"
                    onPress={() => {alert('Wait a second :P')}}
                />
            </View>
        </ScrollView>
    )
};

export default withNavigation(Speaker);