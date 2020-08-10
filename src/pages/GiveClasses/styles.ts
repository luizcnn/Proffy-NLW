import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },
    subtitle: {
        color: '#d4c2ff',
        marginTop: 24,
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },
    button: {
        marginVertical: 40,
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#04D361',
        alignItems: "center"
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;