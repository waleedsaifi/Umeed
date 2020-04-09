import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity} from 'react-native';
import {Ionicons,Entypo} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
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
        <View>
          <ImageBackground source={require('./../images/background9.jpg')} style={{ width:360, height:230,marginTop:0}}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <Ionicons style={styles.icon} name='md-menu'></Ionicons>
                </TouchableOpacity>
      <Text style={{color:'black', fontSize:20,marginVertical:1,marginLeft:80}}>Admin Dashboard</Text>
      <Entypo style={{marginLeft:65,color:'red',fontSize:22,marginVertical:1} } name='log-out' ></Entypo>
      </View>
      <Text style={{color:'black', fontSize:16,textAlign:'right'}}onPress={() => this.props.navigation.navigate('Login')}>logout</Text>
      
      
             <Image source={require('./../images/admin.jpg')}style={{ width:88, height:88, marginLeft: 30, marginTop: 10,borderRadius:99}} ></Image>
      <Text style={{color:'white', fontSize:20,marginVertical:3,textAlign:'center'}}> Welcome {this.props.navigation.getParam('username')}</Text>
      </ImageBackground>
      <TouchableOpacity activeOpacity={0.6} style={styles.container1} onPress={() => this.props.navigation.navigate('Patients')}>
                <LinearGradient start={[0, 1]} end={[1, 0]} style={styles.gradient} colors={['#28a745','#28a745']}>
                    <Text style={styles.text}>Patients</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.container1} onPress={() => this.props.navigation.navigate('Psychologist')}>
                <LinearGradient start={[0, 1]} end={[1, 0]} style={styles.gradient} colors={['#28a745','#28a745']}>
                    <Text style={styles.text}>Psychologists</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.container1} onPress={() => this.props.navigation.navigate('Writer')}>
                <LinearGradient start={[0, 1]} end={[1, 0]} style={styles.gradient} colors={['#28a745','#28a745']}>
                    <Text style={styles.text}>Content Writers</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.container1} onPress={() => this.props.navigation.navigate('Speaker')}>
                <LinearGradient start={[0, 1]} end={[1, 0]} style={styles.gradient} colors={['#28a745','#28a745']}>
                    <Text style={styles.text}>Motivational Speaker</Text>
                </LinearGradient>
            </TouchableOpacity>
      
        <Text style={{color:'green',marginVertical:1,textAlign:'center',fontStyle:'italic',fontSize:22}}>The Time Is:  NOW</Text>
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
    Motivational_Videos:registeredPatient,
    Writting_Content: adminSettings
  
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
  },
  gradient:{
    width:'100%',
    paddingVertical:15,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30
},text:{
    fontWeight:"bold",
    fontSize:14,
    color:'#ffffff',
    
}, container1:{
  width:'80%',
  marginVertical:15,
  borderRadius:30,
  marginTop:25,
  marginLeft:30
},
icon:{
  fontSize:30,
  color:'black',
  marginLeft:10
}
});
