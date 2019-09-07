import React,{Component} from 'react';
import {View , Text , StyleSheet} from 'react-native';
import { Container } from 'native-base';


class PsychologistList extends Component{
render(){
return(

<View style = {styles.container}>

<Text>Psychologist List will be uploaded soon :)</Text>

</View>

);
}
}export default PsychologistList;

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }


})