import React from 'react';
import { StyleSheet,Text, View, Image,ImageBackground,Card} from 'react-native';
import {Ionicons,Entypo} from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native'
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import MotivationalVideos from './MotivationalVideos';
import PsychologistList from './PsychologistList';
// import patientHome from './patientHome';
import {Header, Left, Right, Icon } from 'native-base';
import PatientSettingScreen from './PatientSettingScreen';
import patientPayments from './patientPayments';
import patientInbox from './patientInbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

class patientDashboard extends React.Component {
  
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
      
        
        <ImageBackground source={require('./../images/a.jpg')} style={{flex:9}}>
        <View>
        <Text style={{color:'white', fontSize:20,marginVertical:1,textAlign:'center'}}>Dashboard</Text>
        <Entypo style={{marginLeft:335,color:'red',fontSize:16}} name='log-out' ></Entypo>
        <Text style={{color:'white', fontSize:16,marginVertical:0,textAlign:'right'}}onPress={() => this.props.navigation.navigate('Login')}>logout</Text>
        
                   
               <Image source={require('./../images/aa.jpg')}style={{ width:200, height:200, marginLeft: 73, marginTop: 0,borderRadius:99}} ></Image>
        <Text style={{color:'white', fontSize:20,marginVertical:3,textAlign:'center'}}> Welcome {personInffo.name}</Text>
        </View>
        <View style={{flexDirection:'row',padding:20}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Psychologist_List')}>
                    <Image source={require('./../images/pic1.jpg')} style={{width:150,height:100,padding:20}}></Image>
                    <Text style={{color:'white',marginVertical:1}}>Psychologist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Story')}>
                    <Image source={require('./../images/pic3.jpg')} style={{width:150,height:100,padding:20,marginLeft:10}}></Image>
                    <Text style={{color:'white',marginVertical:1,marginLeft:10}}>Write Success Story</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',padding:20}}>
        <TouchableOpacity >
                    <Image source={require('./../images/pic2.png')} style={{width:150,height:100,padding:20}}></Image>
                    <Text style={{color:'white',marginVertical:1}}>Video Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}> 
                    <Image source={require('./../images/pic4.jpg')} style={{width:150,height:100,padding:20,marginLeft:10}}></Image>
                    <Text style={{color:'white',marginVertical:1,marginLeft:10}}>Feedback</Text>
        </TouchableOpacity>
  
        </View>
        <Text style={{color:'white',marginVertical:1,textAlign:'center',fontStyle:'italic',fontSize:22}}>Never Lose Hope</Text>
        </ImageBackground>

      // <View style ={styles.Container}>
      //   <Text style = {styles.Greeting}>patientDashboard     {personInffo.name}</Text>
      //   <Text style = {styles.Greeting}>Hello Mr.    {personInffo.name}</Text>
        
      // </View>
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
  Home: patientDashboard,
  Inbox:patientInbox,
  Motivational_Videos: MotivationalVideos,
  Psychologist_List: PsychologistList,
  Payments : patientPayments,
  Settings:PatientSettingScreen 
  
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

