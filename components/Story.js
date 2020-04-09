import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,TextInput,ImageBackground} from 'react-native';
import { Textarea } from 'native-base';
import StarRating from 'react-native-star-rating';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

class Story extends Component {
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
        this.state = {
          starCount: 1
        };
      }
  
      state={
        name:'',
        email:'',
      
    }
    changeHandler=(attr,value)=>{
        this.setState({
            [attr]:value
        })
    }
    render() {
        
  
        return (
          <KeyboardAwareScrollView>
            <View>
            <ImageBackground source={require('./../images/story.jpg')} style={{ width:360, height:230,marginTop:0,backgroundColor:'transparent',}}></ImageBackground>
                 
            
           
            <View >
            <TextInput value={this.state.name} onChangeText={(text)=>{this.changeHandler('name',text)}} placeholderTextColor='black' style={styles.input} placeholder=' Name'></TextInput>

              <TextInput value={this.state.email} onChangeText={(text)=>{this.changeHandler('email',text)}} placeholderTextColor='black' style={styles.input} placeholder='Email'></TextInput>

              <Textarea  style={styles.input1}
              placeholder='Write Your Story'></Textarea>

      
           
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}
              
            >SUBMIT
                   </Text>
          </TouchableOpacity>
            </View>
            </View>
            </KeyboardAwareScrollView>
        );
    }
} export default Story;

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
    height: 500,
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
    marginTop:30

},buttonText: {
    color: 'black',
    fontWeight: '900',  
    textAlign: 'center',
    borderRadius: 14,

},


})