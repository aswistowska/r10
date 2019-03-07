import React from 'react';
import {Text, ScrollView, View } from 'react-native';
import AboutContainer from "./AboutContainer";

const About = () => {
    return (
        <ScrollView>
            <Text>
                R10 is a conference that focuses on just about any topic related to dev.
            </Text>
            <Text>Date & Venue</Text>
            <Text>
                The R10 conference will take place on 27 June 2019 at Olympia London.
            </Text>
            <Text>Code of Conduct</Text>
            <AboutContainer/>
            <Text>&copy; RED Academy London</Text>
        </ScrollView>
    )
};

export default About;