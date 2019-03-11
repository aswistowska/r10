import React, {Component} from 'react';
import {Text, Image, ScrollView, View } from 'react-native';

import {AboutCodeOfConductItem} from './AboutCodeOfConductItem'

import {styles} from './styles';


const About = ({allConducts}) => {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.headerImage} source={require('../../../assets/images/r10_logo.png')}/>
            <Text style={styles.paragraph}>
                R10 is a conference that focuses on just about any topic related to dev.
            </Text>
            <Text style={styles.header}>Date & Venue</Text>
            <Text style={styles.paragraph}>
                The R10 conference will take place on 27 June 2019 at Olympia London.
            </Text>
            <Text style={styles.header}>Code of Conduct</Text>
            <View style={styles.component}>
                {allConducts.map((conduct) =>
                    <AboutCodeOfConductItem key={conduct.id} conduct={conduct}/>)}
            </View>
            <Text style={styles.footer}>&copy; Agata Swistowska</Text>
        </ScrollView>
    )
};

export default About;