import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,TextInput, ImageBackground} from 'react-native';
import { Textarea } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


class Complaints extends Component {
  static navigationOptions = {  
    title: 'Umeed',  
    headerStyle: {  
        backgroundColor: '#28a745',
    
    },  
    headerTintColor: 'black',  
    headerTitleStyle: {  
       fontWeight: 'bold',  
       marginHorizontal: '30%',
       
    },  
};  
    constructor(props) {
        super(props);
       
      }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
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
          <View>
          <ImageBackground source={require('././images/1.jpg')} style={{ width:360, height:230,marginTop:0,backgroundColor:'transparent',}}></ImageBackground>
                  
                
              <TextInput value={this.state.name} onChangeText={(text)=>{this.changeHandler('name',text)}} placeholderTextColor='black' style={styles.input} placeholder='First Name'></TextInput>
              <TextInput value={this.state.lname} onChangeText={(text)=>{this.changeHandler('lname',text)}} placeholderTextColor='black' style={styles.input} placeholder='Last Name'></TextInput>
              <TextInput value={this.state.email} onChangeText={(text)=>{this.changeHandler('email',text)}} placeholderTextColor='black' style={styles.input} placeholder='Email'></TextInput>
              <TextInput value={this.state.phone} onChangeText={(text)=>{this.changeHandler('phone',text)}} placeholderTextColor='black' style={styles.input} placeholder='Phone'></TextInput>
              <Textarea  style={styles.input1}
              placeholder='Complaint'></Textarea>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}
            
          >SUBMIT
                 </Text>
        </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
        );
    }
} export default Complaints;

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
    borderWidth:1,
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
    borderWidth:1,
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

},


})