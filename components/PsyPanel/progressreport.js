import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Textarea } from 'native-base';

class progressreport extends Component {
  state={
    name:'',
    email:'',
    Complaint:'',
    lname:'',
    phone:''
}
changeHandler=(attr,value)=>{
    this.setState({
        [attr]:value
    })
}
    render() {
        
        return (
            <KeyboardAwareScrollView >
                
                <ImageBackground source={require('./../images/pic0.jpg')} style={{ width:360, height:190,marginTop:0,backgroundColor:'transparent',}}></ImageBackground>
                  
                <Text style={{color:'red',fontSize:22,fontStyle:'normal',padding:20}}>Patient Progress</Text>
                  <TextInput value={this.state.name} onChangeText={(text)=>{this.changeHandler('name',text)}} placeholderTextColor='black' style={styles.input} placeholder=' Name'></TextInput>
                  <TextInput value={this.state.lname} onChangeText={(text)=>{this.changeHandler('lname',text)}} placeholderTextColor='black' style={styles.input} placeholder='Session No'></TextInput>
                  <TextInput value={this.state.email} onChangeText={(text)=>{this.changeHandler('email',text)}} placeholderTextColor='black' style={styles.input} placeholder='Email'></TextInput>
                  <TextInput value={this.state.phone} onChangeText={(text)=>{this.changeHandler('phone',text)}} placeholderTextColor='black' style={styles.input} placeholder='Phone'></TextInput>
           
            <Text style={{color:'red',fontSize:22,fontStyle:'normal',padding:20}}>Patient Progress</Text>
            <Text style={{padding:10}}>Medolity Patient</Text>
          <Textarea  style={styles.input1}></Textarea>
          <Text style={{padding:10}}>TreatMent Effect</Text>
          <Textarea  style={styles.input1}></Textarea>
          <Text style={{padding:10}}>Mood</Text>
          <Textarea  style={styles.input1}></Textarea>
          <Text style={{padding:10}}>Others</Text>
          <Textarea  style={styles.input1}></Textarea>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}
              
            >SUBMIT
                   </Text>
          </TouchableOpacity>
            
            </KeyboardAwareScrollView>
        );
    }
} export default progressreport;

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
    borderWidth:0.5,
    marginTop:20
    
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
    borderWidth:0.5,
    marginTop:20
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

}

})