import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    mainWrapper: {
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    homeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        textAlign: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    dreamyTitle: {
        color: '#fff',
        flex: 1,
        fontSize: 24,
        fontFamily: 'roboto-bold',
        marginLeft: 15,
    },
    moonIcon: {
        width: 50,
        height: 50,
    },
})