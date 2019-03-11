import { StyleSheet } from 'react-native';
import {colours} from "../../config/styles";

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 12,
    },
    headerImage: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    paragraph: {
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    conductHeader: {
        color: colours.purple,
        marginTop: 20,
        marginBottom: 20,
    },
    footer: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    component: {
        marginBottom: 20,
    },
});