import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class SignupOptions extends Component {

    static navigationOptions = {
        title: "UMEED",
        headerStyle: {
            backgroundColor: '#3498db',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginHorizontal: '30%'
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('./img/umeedLogo.png')} />
                </View>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('SignupPatient')}>
                    <Text style={styles.buttonText} >Sign Up as Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Sign Up as Psychologist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Sign Up as Motivational Speaker</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Sign Up as Content Writer</Text>
                </TouchableOpacity>
            </View>
        );
    }
} export default SignupOptions;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        // alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#3498db',
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 14,
    },
    buttonText: {
        color: 'white',
        fontWeight: '900',
        textAlign: 'center'
    },
    logoContainer: {
        alignItems: "center",
        // flex:1,
        justifyContent: "center"
    },
    logo: {
        width: 100,
        height: 100
    }
})