import React from 'react';
import {ScrollView, Text, View, Image, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";

const Speaker = ({navigation}) => {
    const speakerDetails = navigation.getParam('speakerDetails', {});
    return (
        <ScrollView>
            <View >
                <Image source={{
                    uri: `${speakerDetails.speaker.image}`}}
                       style={{width: 200, height: 200}}/>
                <Text>{speakerDetails.speaker.name}</Text>
                <Text>{speakerDetails.speaker.bio}</Text>
                <ButtonGradient
                    buttonText="Read More on Wikipedia"
                    onPress={() => {alert('Wait a second :P')}}
                />
            </View>
        </ScrollView>
    )
};

export default withNavigation(Speaker);