import { StyleSheet } from 'react-native';
import {colours, fonts} from "../../config/styles";


export const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    time: {
        backgroundColor: colours.lightGrey,
        padding: 5,
        paddingLeft: 10,
        fontSize: 14,
        fontFamily: fonts.regular,
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.regular,
    },
    location: {
        fontSize: 12,
        fontFamily: fonts.regular,
        color: colours.mediumGrey
    },
    item: {
        flex: 1
    }

});