import React, { Component } from 'react'
import { ImageBackground} from 'react-native';

export default class Help extends Component {
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
    };  s
    render() {
        return (
            <ImageBackground source={require('././images/pic20.jpg')} style={{flex:9}}>
         
            </ImageBackground>
        )
    }
}
