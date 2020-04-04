import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, ActivityIndicator, TouchableOpacity,Image,ImageBackground } from 'react-native';

class PatientProfile extends Component {
    render() {

        const personInffo = this.props.navigation.getParam('PatientInfo')
        return (
          <ImageBackground source={require('./../images/back.png')} style={{flex:9}}>
          <View>
          <Text style={{color:'white', fontSize:22, marginVertical:5}}>Profile</Text>  
          <Image source={require('./../images/user.jpg')}style={{ width:200, height:200, marginLeft: 70, marginTop: 10,borderRadius:99}} ></Image>
          
          <Text style={{color:'#94C746', fontSize:20,marginVertical:3,textAlign:'center'}}>{personInffo.name}</Text>
          <Text style={{color:'black', fontSize:20,marginVertical:10}}>Email</Text>
          <Text style={{color:'#94C746', fontSize:18,justifyContent:'center', alignItems:'center', borderColor:'#94C746', borderWidth:1,marginVertical: 5,textAlign:'center'}}>{personInffo.email}</Text>
          <Text style={{color:'black', fontSize:20,marginVertical:10}}>Age</Text>
          <Text style={{color:'#94C746', fontSize:18,justifyContent:'center', alignItems:'center',marginVertical: 1,textAlign:'center'}}>{personInffo.age}</Text>
          <Text style={{color:'black', fontSize:20,marginVertical:10}}>CNIC</Text>
          <Text style={{color:'#94C746', fontSize:18,justifyContent:'center', alignItems:'center',marginVertical: 3,textAlign:'center',borderColor:'#94C746', borderWidth:1,width: '50%',marginLeft:75}}>{personInffo.cnic}</Text>
          <Text style={{color:'black', fontSize:20,marginVertical:10}}>Ph#</Text>
          <Text style={{color:'#94C746', fontSize:18,justifyContent:'center', alignItems:'center',textAlign:'center',borderColor:'#94C746', borderWidth:1,width: '50%',marginLeft:80}}>{personInffo.contact}</Text>
          
          </View>
          </ImageBackground>
        );
    }
    }

export default PatientProfile ;

