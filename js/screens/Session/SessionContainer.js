import React, {Component} from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {Text} from "react-native";
import {formatSessionData} from "../../config/helpers";
import Session from "./Session";

const GET_SESSIONS = gql`
{
    allSessions {
      id
      startTime
      title
      location
      description
      speaker {
        id
        image
        name
      }
    }
}
`;

export default class SessionContainer extends Component {
    render() {
        return (
            <Query query={GET_SESSIONS}>
                {({loading, error, data}) => {
                    if (loading) return <Text>"Loading..."</Text>;
                    if (error) return <Text>`Error! ${error.message}`</Text>;
                    return <Session allSessions={formatSessionData(data.allSessions)}/>
                }}
            </Query>
        )
    }
}