import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    addDreamContainer: {
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: -100,
        width: 200,
        height: 200,
        alignItems: 'center',
        backgroundColor: '#b1b9de',
        borderRadius: 1000,
    },
    addDreamButton: {
        color: '#fff',
        textAlign: 'center',
        height: 80,
        paddingTop: 30,
        fontSize: 30,
        color: '#6c75a6',
    },
    dreamsWrapper: {
        display: 'flex',
        width: '100%',
        padding: 20,
    },
    card: {
        backgroundColor: '#0b172ec7',
        borderRadius: 20,
        marginBottom: 10,
        width: '100%',
        padding: 20,
    },
    cardTitle: {
        color: '#fff',
        fontWeight: 800,
        fontSize: 20,
    },
    cardDescription: {
        color: '#fff',
        fontSize: 18,
    }
})