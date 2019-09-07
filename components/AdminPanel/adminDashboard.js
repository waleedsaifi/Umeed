import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';
import {Header , Left, Right, Icon, Container} from 'native-base'
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import adminSettings from './adminSettings'
import registeredPatient from './registeredPatient'
import { SafeAreaView, ScrollView} from 'react-native'
// import {ImagePicker} from 'expo';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
class adminDashboard extends React.Component {
  // static navigationOptions = {
  //   header : null   
  // }
  state = {
    image: '../img/umeedLogo.png'
  };

  selectPicture = async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowEditing : true,
      aspect:[4,3]

    })
    console.log(result)
    
    if(!result.cancelled){
      this.setState({ image: result.uri});
    }
  }
    render(){
      let { image } = this.state
      return(   
            <View  style={styles.container}>
            <Text style={styles.Greeting} > Welcome {this.props.navigation.getParam('username')}</Text>
            {/* <Image source = {{uri: this.state.image}} /> */}
{/* 
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            <Text onPress = {this.selectPicture}> Upload</Text> */}
            </View> 
      );
    }  
  }

  const CustomDrawerComponent = (props) => (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../img/user_logo.png')}
          style={{ height: 120, width: 120, borderRadius: 60 }} />
        <Text style={{color: '#3498db' , textDecorationLine: 'underline'}}
        // onPress={() => this.choosePhoto()}
        > Change Image</Text>
      </View>
      <Text >{props.navigation.getParam('username')} Panel</Text>
      <ScrollView>
        <DrawerItems {...props}></DrawerItems>
      </ScrollView>
    </SafeAreaView>
  )
  
  
  const AppDrawerNavigator = createDrawerNavigator({
    DashBoard: adminDashboard,
    RegisteredPatient:registeredPatient,
    Settings: adminSettings
  },{
      contentComponent: CustomDrawerComponent,
    },
    {
      navigationOptions:({navigation})=>{
        const {routeName} = navigation.state.routes[navigation.state.index]
        return{
          headerTitle: routeName
        }
      }
    })
  const AppContainer = createAppContainer(AppDrawerNavigator);
  export default AppContainer;

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Greeting: {
    fontSize: 20,
    fontWeight: '900',
  }
});
