import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';

class settingScreen extends React.Component {
  static navigationOptions = {  
    title: 'Umeed',  
    headerStyle: {  
        backgroundColor: '#28a745',
    
    },  
    headerTintColor: 'black',  
    headerTitleStyle: {  
       fontWeight: 'bold',  
       marginHorizontal: '40%',
       
    },  
};  
    render(){
      return(
            <View  style={styles.container}>
            <Text>Hello from Admin panel</Text>
            </View> 
      );
    }  
  }
  export default settingScreen;

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
