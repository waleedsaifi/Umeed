import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';


class adminSettings extends React.Component {
    static navigationOptions = {
      headerLeft : null
    }
      render(){
        return(   
              <View>
              <Text>{this.props.navigation.getParam('username')} Settings are under construction </Text>
              </View> 
        );
      }  
    }
    export default adminSettings;