import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';

class settingScreen extends React.Component {

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
