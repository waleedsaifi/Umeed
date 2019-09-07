import React,{Component} from 'react';
import {View , Text , StyleSheet} from 'react-native';
import { Container } from 'native-base';


class MotivationalVideos extends Component{
render(){
    const personInffo = this.props.navigation.getParam('personInfo')
return(

<View style = {styles.container}>

<Text>Videos will be uploaded soon :)</Text>
<Text> {personInffo.name} </Text>
<Text> {personInffo.contact} </Text>
   
</View>

);
}
}export default MotivationalVideos;

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }


})