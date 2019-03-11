/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { ApolloProvider } from "react-apollo";
import {client} from './apollo'
import { View } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';

export default class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <View style={{backgroundColor: 'white', display: 'flex', flex: 1}}>
                    <RootStackNavigator/>
                </View>
            </ApolloProvider>
        )
    }
}

