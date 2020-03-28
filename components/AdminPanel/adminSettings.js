import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,Dimensions,ImageBackground} from 'react-native';
import {Ionicons,MaterialCommunityIcons,Entypo,FontAwesome} from '@expo/vector-icons';
const {width} = Dimensions.get('window');
export default class adminSetting extends Component {
  
    render() {
      
        return (
          
            <ImageBackground source={require('./../images/background1.jpg')} style={{flex:9}}>
           
          <View style={styles.top}>
                    
          <Text style={styles.title}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('SignupPatient')}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                    <View style={styles.center}>
                        <MaterialCommunityIcons style={styles.icon} name='square-edit-outline'></MaterialCommunityIcons>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Update Prices</Text>
                    <View style={styles.center}>
                        <MaterialCommunityIcons style={styles.icon} name='switch'></MaterialCommunityIcons>
                    </View>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Contact</Text>
                    <View style={styles.center}>
                        <MaterialCommunityIcons style={styles.icon} name='md-information-circle-outline'></MaterialCommunityIcons>
                    </View>
                </TouchableOpacity>


                 <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Help</Text>
                    <View style={styles.center}>
                        <MaterialCommunityIcons style={styles.icon} name='podcast'></MaterialCommunityIcons>
                    </View>
                </TouchableOpacity>  

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Language</Text>
                    <View style={styles.center}>
                        <Entypo style={styles.icon} name='language'></Entypo>
                    </View>
                </TouchableOpacity>
                     </ImageBackground>
              
          
            
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
        fontSize:26,
        
        color:'black',
        flex:1,
        paddingLeft:width*0.26
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
    }
})