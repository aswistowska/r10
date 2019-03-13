import React, {Component} from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

import About from './About';

import { Text} from "react-native";


const GET_CONDUCT = gql`
  {
    allConducts {
      id
      title
      description
    }
  }
`;

export default class AboutContainer extends Component{
    render() {
        return (
            <Query query={GET_CONDUCT}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>"Loading..."</Text>;
                    if (error) return <Text>`Error! ${error.message}`</Text>;
                    return <About allConducts={data.allConducts}/>
                }}
            </Query>
        )
    }
}