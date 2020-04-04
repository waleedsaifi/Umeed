import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity} from 'react-native';
import {Ionicons,Entypo} from '@expo/vector-icons';
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

        <ImageBackground source={require('./../images/background5.jpeg')} style={{flex:9}}>
      <View>
      <Text style={{color:'white', fontSize:20,marginVertical:1,textAlign:'center'}}>Admin Dashboard</Text>
      <Entypo style={{marginLeft:335,color:'red',fontSize:16}} name='log-out' ></Entypo>
      <Text style={{color:'white', fontSize:16,marginVertical:0,textAlign:'right'}}onPress={() => this.props.navigation.navigate('Login')}>logout</Text>
      
                 
             <Image source={require('./../images/admin.jpg')}style={{ width:200, height:200, marginLeft: 73, marginTop: 0,borderRadius:99}} ></Image>
      <Text style={{color:'white', fontSize:20,marginVertical:3,textAlign:'center'}}> Welcome {this.props.navigation.getParam('username')}</Text>
      </View>
      <View style={{flexDirection:'row',padding:20}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Psychologist')} >
                  <Image source={require('./../images/pic1.jpg')} style={{width:150,height:100,padding:20}}></Image>
                  <Text style={{color:'white',marginVertical:1}}>Psychologist</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Patients')}>
                  <Image source={require('./../images/pic5.jpg')} style={{width:150,height:100,padding:20,marginLeft:10}}></Image>
                  <Text style={{color:'white',marginVertical:1,marginLeft:10}}>Patients</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',padding:20}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Writer')} >
                  <Image source={require('./../images/pic6.jpg')} style={{width:150,height:100,padding:20}}></Image>
                  <Text style={{color:'white',marginVertical:1}}>Content Writer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Speaker')}>
                  <Image source={require('./../images/pic7.jpg')} style={{width:150,height:100,padding:20,marginLeft:10}}></Image>
                  <Text style={{color:'white',marginVertical:1,marginLeft:10}}>Motivational Speaker</Text>
      </TouchableOpacity>
      </View>
        <Text style={{color:'white',marginVertical:1,textAlign:'center',fontStyle:'italic',fontSize:22}}>The Time Is:  NOW</Text>
        </ImageBackground>
    

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
    RegisteredUser:registeredPatient,
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
