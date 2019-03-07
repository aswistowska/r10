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

import {About} from './screens/About';

import { View } from 'react-native';


const App = () => (
    <ApolloProvider client={client}>
        <View style={{backgroundColor: 'white', display: 'flex', flex: 1}}>
            <About/>
        </View>
    </ApolloProvider>
);


export default App;