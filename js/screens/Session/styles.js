import { StyleSheet } from 'react-native';
import {colours, fonts} from "../../config/styles";


export const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
    },
    header: {
        display: 'flex',
        flexDirection: 'row'
    },
    subtitle: {
        flex: 1,
        fontSize: 16,
        fontFamily: fonts.regular,
        color: colours.mediumGrey,
        paddingBottom: 10
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.regular,
        paddingBottom: 10
    },
    time: {
        color: colours.red,
        fontSize: 16,
        fontFamily: fonts.regular,
        paddingBottom: 10
    },
    description: {
        fontFamily: fonts.light,
        fontSize: 20,
        paddingBottom: 15,
    },
    speakerSection: {
        display: 'flex',
        flexDirection: 'row',
    },
    speakerImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    speakerText: {
        alignSelf: 'center',
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingLeft: 10
    }

});