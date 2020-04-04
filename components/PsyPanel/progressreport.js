import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Textarea } from 'native-base';

class progressreport extends Component {
    render() {
        
        return (
            <KeyboardAwareScrollView >
                
            <ImageBackground source={require('./../images/background8.jpg')} style={{flex:9}}>
                <View>
            <Image source={require('./../images/pic0.jpg')}style={{ width:350, height:150,}} ></Image>
            <Text style={{color:'red',fontSize:22,fontStyle:'normal'}}>Personal Information</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <TextInput
            style={styles.input}
            placeholder='Enter The Patient Name '
            autoCapitalize="none"
            placeholderTextColor='black'
           // onChangeText={(text) => {this.setState({ username: text })}}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter The Email'
            autoCapitalize="none"
            placeholderTextColor='black'
            
           // onChangeText={(text) => {this.setState({ username: text })}}
          />
            </View>
            <View style={{flexDirection:'row'}}>
            <TextInput
            style={styles.input}
            placeholder='Enter The Phone No '
            autoCapitalize="none"
            placeholderTextColor='black'
           // onChangeText={(text) => {this.setState({ username: text })}}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter The Session No.'
            autoCapitalize="none"
            placeholderTextColor='black'
            
           // onChangeText={(text) => {this.setState({ username: text })}}
          />
            </View>
            <Text style={{color:'red',fontSize:22,fontStyle:'normal',padding:20}}>Patient Progress</Text>
            <Text style={{padding:10}}>Medolity Patient</Text>
          <Textarea  style={styles.input1}></Textarea>
          <Text style={{padding:10}}>TreatMent Effect</Text>
          <Textarea  style={styles.input1}></Textarea>
          <Text style={{padding:10}}>MOOd</Text>
          <Textarea  style={styles.input1}></Textarea>
          <Text style={{padding:10}}>Others</Text>
          <Textarea  style={styles.input1}></Textarea>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}
              
            >SUBMIT
                   </Text>
          </TouchableOpacity>
            </ImageBackground>
            </KeyboardAwareScrollView>
        );
    }
} export default progressreport;

const styles = StyleSheet.create({

    input: {
        width: 180,
        fontWeight: '500',
        height: 50,
        backgroundColor: 'white',
        opacity: 0.5,
        marginBottom: 25,
        marginLeft:5,
        borderRadius: 5,
        color: 'black',
        borderColor:'black',
        paddingHorizontal: 5
        
      },
      input1: {
        width: 300,
        fontWeight: '600',
        height: 100,
        backgroundColor: 'white',
        opacity: 0.5,
        marginBottom: 15,
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 10,
        marginLeft:20
        
      },
      buttonContainer: {
        marginLeft: 120,
        marginRight: 120,
        backgroundColor: '#28a745',
        paddingVertical: 15,
        marginBottom: 70,
        borderRadius: 14,

    },buttonText: {
        color: 'black',
        fontWeight: '900',  
        textAlign: 'center',
        borderRadius: 14,

    },


})