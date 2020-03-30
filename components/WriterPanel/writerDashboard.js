import React from 'react';
import { StyleSheet,Text, View, Image,ImageBackground,Card} from 'react-native';
import {Ionicons,Entypo} from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native'
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import addContent from './addContent';
import deleteContent from './deleteContent';
// import patientHome from './patientHome';
import {Header, Left, Right, Icon } from 'native-base';
import Setting from './Setting';
import ViewFedback from './ViewFedback';
import viewPayements from './viewPayements';
import { TouchableOpacity } from 'react-native-gesture-handler';

class writerDashboard extends React.Component {
  
  // static navigationOptions = {

  //   headerLeft:null,
  //   headerTitle: <Icon name="menu"
  //   //  onPress ={()=>this.props.navigation.openDrawer()
  //   // onPress = {() => navigation.openDrawer()}
  //   />,
  //  title: 'Welcome',
  //   headerStyle: {
  //     backgroundColor: '#3498db',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // }
  // constructor() {
  //   super();
  //   this.state = {
  //    username:'',
  //    imageURL: ''
  //   }
  // }
  render() {

    const personInffo = this.props.navigation.getParam('personInfo')
    return (
      
        
        <ImageBackground source={require('./../images/background6.jpg')} style={{flex:9}}>
        <View>
        <Text style={{color:'white', fontSize:20,marginVertical:1,textAlign:'center'}}>Writer Dashboard</Text>
        <Entypo style={{marginLeft:335,color:'red',fontSize:16}} name='log-out' ></Entypo>
        <Text style={{color:'white', fontSize:16,marginVertical:0,textAlign:'right'}}onPress={() => this.props.navigation.navigate('Login')}>logout</Text>
        
                   
               <Image source={require('./../images/a2.jpeg')}style={{ width:200, height:200, marginLeft: 73, marginTop: 0,borderRadius:99}} ></Image>
        <Text style={{color:'white', fontSize:20,marginVertical:3,textAlign:'center'}}> Welcome {personInffo.name}</Text>
        </View>
        <Image source={require('./../images/pic10.jpg')}style={{ width:300, height:300, marginLeft: 28, marginTop: 10}} ></Image>
      
        <Text style={{color:'pink',marginVertical:1,textAlign:'center',fontStyle:'italic',fontSize:22}}>Content Is The Reason Search Began In The First</Text>
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
      >Change Image</Text>
    </View>
   

    <ScrollView>
    <Text style = {{marginLeft:0}}>{props.navigation.getParam('personInfo').name}</Text>
      <DrawerItems {...props}></DrawerItems>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: writerDashboard,
  Add_Content:addContent,
  Delete_Content: deleteContent,
  Feedback: ViewFedback,
  Payments : viewPayements,
  Settings:Setting 
  
},{
    contentComponent: CustomDrawerComponent,
  //  drawerBackgroundColor: '#3498db'
  })
const AppContainer = createAppContainer(AppDrawerNavigator);
export default AppContainer;



const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // color: 'blue'
},
  Greeting: {
    fontSize: 20,
    fontWeight: '900',
    // alignContent: 'center',
    // alignItems: 'centre'

  }
})

