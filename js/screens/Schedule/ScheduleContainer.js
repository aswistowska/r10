import React, {Component} from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {Text} from "react-native";
import Schedule from "../Schedule/Schedule";
import {formatSessionData} from "../../config/helpers";

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
      }
    }
  }
`;

export default class ScheduleContainer extends Component{
    render() {
        return (
            <Query query={GET_SESSIONS}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>"Loading..."</Text>;
                    if (error) return <Text>`Error! ${error.message}`</Text>;
                    return <Schedule allSessions={formatSessionData(data.allSessions)}/>
                }}
            </Query>
        )
    }
}