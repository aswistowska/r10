import React, {Component} from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

import {View, Text} from "react-native";


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

                    return <View>
                        {data.allConducts.map((conduct) =>
                            <Text key={conduct.id}>{conduct.title} {conduct.description}</Text>)}
                    </View>
                }}
            </Query>
        )
    }
}