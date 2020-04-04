import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,Dimensions,ImageBackground} from 'react-native';

const {width} = Dimensions.get('window');
export default class Language extends Component {
    render() {
        return (
            <ImageBackground source={require('././images/background8.jpg')} style={{flex:9}}>
                <View style={styles.top}>
                    
                    <Text style={styles.title}>Language</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Urdu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Turkish</Text>
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
        color:'black',
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
        alignItems:"center",
        justifyContent:"center",
        width:'100%'
    },buttonText:{
        fontSize:18,
       
        color:'black',
        padding:10,
    }
})