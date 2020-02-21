import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";


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
                        source={require('./img/Umeed.png')} />
                </View>
                <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
                <Menu>
                    <MenuTrigger>
                        <Text style={styles.headerText}>= Signup</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('SignupPatient')}>
                    <Text style={styles.buttonText} >Sign Up as Patient</Text>
                </TouchableOpacity>
                </MenuOption>
                <MenuOption>
                <TouchableOpacity style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('SignupPsychologist')}>
                    <Text style={styles.buttonText} >Sign Up as Psychologist</Text>
                </TouchableOpacity>
                </MenuOption>
                <MenuOption>
                <TouchableOpacity style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('SignupMotivationalSpeaker')}>
                    <Text style={styles.buttonText} >Sign Up as Motivational Speaker</Text>
                </TouchableOpacity>
                </MenuOption>
                <MenuOption>
                <TouchableOpacity style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('SignupContentWriter')}>
                    <Text style={styles.buttonText} >Sign Up as Content Writer</Text>
                </TouchableOpacity>
                </MenuOption>
                </MenuOptions>
                </Menu>
                </MenuProvider>
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
        width: 200,
        height: 130
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold",
        color:"blue"
        
      }
})