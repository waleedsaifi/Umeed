import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

class patientInbox extends React.Component {

    render(){
      return(
  <View style = {styles.container}>     
     <Text>Under Construction</Text>
     <Icon name = "code"/>
          </View>
      );
    }
  }

  export default patientInbox;

  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });