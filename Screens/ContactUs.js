import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,Dimensions, TextInput, ImageBackground,Image} from 'react-native';
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import { Textarea } from 'native-base';



const {width} = Dimensions.get('window');
export default class ContactUs extends Component {
    state={
        name:'',
        email:'',
        question:'',
    }
    changeHandler=(attr,value)=>{
        this.setState({
            [attr]:value
        })
    }
    render() {
        return (
            <ImageBackground source={require('././images/background8.jpg')} style={{flex:9}}>
                    <Text style={{color:'black',fontSize:22,textAlign:'center'}}>Contact Us</Text>
                    <Image source={require('././images/pic21.jpg')}style={{ width:300, height:200,marginLeft:30,marginBottom:30,marginTop:30}} ></Image>
                <TextInput value={this.state.name} onChangeText={(text)=>{this.changeHandler('name',text)}} placeholderTextColor='black' style={styles.input} placeholder='Name'></TextInput>
                <TextInput value={this.state.email} onChangeText={(text)=>{this.changeHandler('email',text)}} placeholderTextColor='black' style={styles.input} placeholder='Email'></TextInput>
                <Textarea  style={styles.input1}
                placeholder='Ask A Question?'></Textarea>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}
              
            >SUBMIT
                   </Text>
          </TouchableOpacity>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
  input: {
        width: 300,
        fontWeight: '500',
        height: 50,
        backgroundColor: 'white',
        opacity: 0.5,
        marginBottom: 15,
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 10,
        marginLeft:30,
        
      },
      input1: {
        width: 300,
        fontWeight: '600',
        height: 150,
        backgroundColor: 'white',
        opacity: 0.5,
        marginBottom: 15,
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 10,
        marginLeft:30,
        
        
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