import React, { Component } from 'react';
import { Button, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Platform } from 'react-native';

// import keyboard spacer so Android keyboard doesn't hide message input field
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class patientInbox extends Component {
     
  constructor(props) {
    super(props);
    this.state={ 
        name: '',
        bColor: '#090C08', // default background color for chat screen
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.background}
                source={require('./../images/background4.png')}
               
                >
                    <Text style={styles.title}>Let's Chat</Text>
            <KeyboardAvoidingView
                style={styles.startBox}
                behavior = 'padding'
                enabled >
                <TextInput
                style={styles.textInput}
                onChangeText={(name)=>{this.setState({name})}}
                value={this.state.name}
                placeholder='Your Name'
                />
                
              
                <Button 
                    style={styles.button}
                    onPress={()=>this.props.navigation.navigate('Chat',{name: this.state.name })}
                    title="Start Chatting"
                />
            </KeyboardAvoidingView>
            { Platform.OS === 'android' ? <KeyboardSpacer /> : null }
            </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  background: {
      width: '100%',
      height: '100%',
  },
  title: {
      padding: 40,
      /* omit to prevent wacky android display with keyboard */
      /* flex: .9, */
      fontSize: 45,
      fontWeight: '600',
      color: '#FFFFFF',
      opacity: .5,
      alignSelf: 'center',
      justifyContent: 'center'
  },
  startBox: {
      backgroundColor: 'white',  
      flex: .9,
      margin:12,
      height: '44%',
      width: '88%',
      alignSelf: 'center', //adjusts horizontal position
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: 6,
  },  
  textInput: {
      fontSize: 16,
      fontWeight: '300',
      color: '#757083',
      opacity: 1,
      alignSelf: 'center',
      borderColor: '#757083',
      borderWidth: 1,
      paddingLeft: 20,
      width: '88%',
      height: 60
  },
  colorBox: {
      width: '88%',
      fontSize: 16,
      fontWeight: '300',
      color: '#757083',
      opacity: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 20
  },
  colorCircles: {
    height: 50,
    width: 50,
    borderRadius: 25,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  selected: { // indicates selected color button
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
  },
  button: {
      width: '88%',
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
      backgroundColor: '#747083',
      alignSelf: 'center',
      paddingLeft: 40,
    },
});
