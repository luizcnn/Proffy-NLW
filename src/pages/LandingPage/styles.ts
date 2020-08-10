import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#8257E5',
        padding: 40,
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        marginTop: 80,
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    button: {
        height: 120,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    buttonPrimary: {
        backgroundColor: "#9871F5"
    },
    buttonSecondary: {
        backgroundColor: '#04D361',
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 18,
    },
    totalConnections: {
        marginTop: 40,
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
    }
})

export default styles;