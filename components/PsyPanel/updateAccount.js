import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,Dimensions,ImageBackground,Image} from 'react-native';
import {Ionicons,MaterialCommunityIcons,Entypo,FontAwesome} from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
const {width} = Dimensions.get('window');
export default class adminSetting extends Component {
  
    render() {
        const personInffo = this.props.navigation.getParam('personInfo')
        return (
            <KeyboardAwareScrollView >
            <ImageBackground source={require('./../images/background1.jpg')} style={{flex:9}}>
                <Text style={styles.title}>Account</Text>
           <Image source={require('./../images/a1.jpg')}style={{ width:200, height:200, marginLeft: 73, marginTop: 0,borderRadius:99}} ></Image>
          <View style={styles.top}>
                    
          
      </View>
      <View >
      <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Name:</Text>
                    <Text style={styles.buttonText}>{personInffo.name}</Text>
                    
                </TouchableOpacity> 
                </View>
                <View >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Email:</Text>
                    <Text style={styles.buttonText}>{personInffo.email}</Text>
                    
                </TouchableOpacity> 
                </View>
                <View >
      <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Age:</Text>
                    <Text style={styles.buttonText}>{personInffo.age}</Text>
                    
                </TouchableOpacity> 
                </View>
                <View >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Phone No:</Text>
                    <Text style={styles.buttonText}>{personInffo.contact}</Text>
                    
                </TouchableOpacity> 
                </View>
                <View >
      <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>CNIC:</Text>
                    <Text style={styles.buttonText}>{personInffo.cnic}</Text>
                    
                </TouchableOpacity> 
                </View>
                <View >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Gender:</Text>
                    <Text style={styles.buttonText}>{personInffo.gender}</Text>
                    
                </TouchableOpacity> 
                </View>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button1Text}
                    onPress={() => this.props.navigation.navigate('SignupPsychologist')}
                    >Manage Account
                    </Text>
                </TouchableOpacity>
                     </ImageBackground>
              </KeyboardAwareScrollView>
          
            
        )
    }
    
}

const styles = StyleSheet.create({
    top:{
        flexDirection:"row",
        paddingVertical:20,
        alignItems:"center"
    },back:{
        fontSize:30,
        color:'#ffffff',
        padding:10,
        paddingLeft:20
    },title:{
        fontSize:28,
        marginLeft:90,
        color:'black',
        flex:1,
    },button:{
        flexDirection:"row",
        padding:10,
        borderBottomColor:'rgba(255,255,255,0.4)',
        borderBottomWidth:0.2,
        alignItems:"center"
    },buttonText:{
        fontSize:18,
        
        color:'#ffffff',
        padding:10,
        flex:1
    },icon:{
        fontSize:26,
        padding:10,
        color:'#ffffff',
    },center:{
        justifyContent:"center",
        alignItems:"center",
        width:80
    },buttonContainer: {
        marginLeft: 90,
      
        backgroundColor: '#28a745',
        paddingVertical: 15,
        marginTop:30,
        borderRadius: 14,
        padding:20,
        width:180,
        height:50,

    },button1Text: {
        color: 'black',
        fontWeight: '900',  
        textAlign: 'center',
        borderRadius: 14,
       

    },
})