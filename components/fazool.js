import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  StatusBar
} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {

  static navigationOptions = {
    header : null
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        backgroundColor= "#1e90ff"
        barStyle = "light-content"
        />
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        /> */}

        <View
        style = {styles.btnView}>
        <Button
          title='Login'
          color = 'black'
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Button
          title='Sign Up'
          color = 'black'
          onPress={() => alert("signup Pressed")}
        />
        </View>
        
      </View>
    )
  } 
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
       
      </View>
    );
  }
}

const RootStack = createStackNavigator(
{
  Home: HomeScreen,
  Details: DetailsScreen
},
{
  initialRouteName: 'Home'
}
);

const AppContainer = createAppContainer(RootStack);

export default class SignUp extends React.Component {
  // state = {
  //   username: '', password: '', email: '', phone_number: ''
  // }
  // onChangeText = (key, val) => {
  //   this.setState({ [key]: val })
  // }
  // signUp = async () => {
  //   const { username, password, email, phone_number } = this.state
  //   try {
  //     // here place your signup logic
  //     console.log('user successfully signed up!: ', success)
  //   } catch (err) {
  //     console.log('error signing up: ', err)
  //   }
  // }

  render() {
    return (

      <AppContainer/>
    );

  }

}

const styles = StyleSheet.create({

btnView: {
    flexDirection:'row',
    width : '50%',
    justifyContent: "space-between"
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'pink',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    backgroundColor: 'lightgreen',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: 'black'
  }
})



 import React , { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import Home from './components/Home'
 import Signup from './components/Signup'

// import { createStackNavigator, createAppContainer } from 'react-navigation';

// const RootStack = createStackNavigator({

// Home : Home,
// Signup : Signup,
// },
// {
//   initialRouteName: 'Home'
// }
// )
// const AppContainer = createAppContainer(RootStack)

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World
//       </Text>
//     </View>
  
// //  <AppContainer/> 
  
//   );
// }
import {createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
   createBottomTabNavigator,
  createStackNavigator} from 'react-navigation';


// class DashboardScreen extends React.Component {
//   render(){
//     return(
// <View style = {styles.container}>
//           <Text>Welcome DashboardScreen</Text>
//         </View>
//     );
//   }  
// }

// class WelcomeScreen extends React.Component {
//   render(){
//     return(
// <View style = {styles.container}>     
//    <Text>WelcomeScreen</Text>
//    <Button title = "login" onPress={() => this.props.navigation.navigate('DashboardScreen')} />
//    <Button title = "SignUp" onPress={() => alert("SignUp Pressed")} />
//         </View>
//     );
//   }
// }

class accounts extends React.Component {
  render(){
    return(
<View style = {styles.container}>
          <Text>Home</Text>
        </View>
    );
  }  
}

class profile extends React.Component {
  render(){
    return(
<View style = {styles.container}>
          <Text>Profile</Text>
        </View>
    );
  }  
}

class settings extends React.Component {
  render(){
    return(
<View style = {styles.container}>
          <Text>Settings</Text>
        </View>
    );
  }  
}



const DashboardTabNavigator = createBottomTabNavigator({
accounts,
profile,
settings
},
{
  navigationOptions: ({navigation}) => {
const { routeName } = navigation.state.routes[navigation.state.index];
return{
  headerTitle: routeName
};

  }
}


)

const DashboardStackNavigator = createStackNavigator({

  DashboardTabNavigator: DashboardTabNavigator
  
  },{
defaultNavigationOptions:({navigation})=>{
return{

 headerLeft:(
   <Icon style = {{ padding:20 }} name = "md-menu" size={30} 
   onPress = {() => navigation.openDrawer()}/>
 )
}

}

  }
  
  )

const AppDrawerNavigator = createDrawerNavigator({

  Dashboard :  DashboardStackNavigator
})
  
const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen: Signup },
  DashboardScreen : {screen : AppDrawerNavigator } 
}) ;
const AppContainer = createAppContainer(AppSwitchNavigator);


class App extends Component {
  render() {
    return(
      // <View style = {styles.container}>
      //   <Text>Welcome Waleed</Text>
      //   </View>
        <AppContainer />
    );
  }
  }
  export default App;

