import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 55,
        backgroundColor: '#f6b092',
        minHeight: '100%'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
        textAlign: 'center',
        marginRight: 10
    },
    questionContainer: {
        marginBottom: 20,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding: 15,
        alignItems: 'center',
        elevation: 5,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#555',
        marginBottom: 12
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 12,
        marginBottom: 15
    },
    buttonContainer: {
        marginTop: 16,
        width: '80%',
        backgroundColor: '#6495ED',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
    subtitle: {
        fontSize: 15.5,
        fontWeight: '400',
        color: '#000',
        marginBottom: 24,
        textAlign: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },

    pickerStyle: {
        inputAndroid: {
            fontSize: 16,
            color: '#333',
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: '#F5F5F5',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#ddd',
            width: '100%',
            marginBottom: 15
        }
    }
});

export default styles;
