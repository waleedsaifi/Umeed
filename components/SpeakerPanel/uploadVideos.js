import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,TextInput ,TouchableOpacity} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

class uploadVideos extends Component {
    state={
        name:'',
        email:'',
        Complaint:'',
        lname:'',
        phone:'',
        text: ''
    }
    changeHandler=(attr,value)=>{
        this.setState({
            [attr]:value
        })
    }
    render() {
       
        return (
            <View>
                <ImageBackground source={require('./../images/background8.jpg')} style={{ width:360, height:230,marginTop:0}}>
           <Text style={{textAlign:'center',fontSize:22,fontWeight:'bold',color:'blue',marginTop:20}}>Video Uploader</Text>
           <Text style={{padding:10,marginTop:20}}>Upload the videos that are usefull for the patient</Text>
          
           </ImageBackground>
                           
           <TextInput value={this.state.name} onChangeText={(text)=>{this.changeHandler('name',text)}} placeholderTextColor='black' style={styles.input} placeholder='Video Title'></TextInput>
              <TextInput value={this.state.lname} onChangeText={(text)=>{this.changeHandler('lname',text)}} placeholderTextColor='black' style={styles.input} placeholder='Video Description'></TextInput>
      
         <TouchableOpacity style={styles.buttonContainer1}>
          <Text style={styles.buttonText1}>Browse</Text>
                 <Text style={{marginLeft:70,color:'black',width:150,height:50,marginTop:0,fontSize:16}}> Select the Video</Text>
        </TouchableOpacity>

<TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}
            
          >Upload Video
                 </Text>
        </TouchableOpacity>
         </View>
        );
    }
} export default uploadVideos;

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
        marginTop:40
    
    },buttonText: {
        color: 'black',
        fontWeight: '900',  
        textAlign: 'center',
        borderRadius: 14,
    
    },
    buttonContainer1: {
        marginLeft: 30,
      width:120,
      height:50,
      backgroundColor: 'seagreen',
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 14,
        flexDirection:'row',
        marginTop:20
    
    },buttonText1: {
        color: 'black',
        fontWeight: '900',  
        textAlign: 'center',
        borderRadius: 14,
        marginLeft:40
    
    },
   


})