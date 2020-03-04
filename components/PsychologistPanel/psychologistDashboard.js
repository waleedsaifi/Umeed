import React from 'react';
import { StyleSheet,Text, View, Image} from 'react-native';
import { SafeAreaView, ScrollView} from 'react-native'
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import progressreport from './progressreport';
import PyschologistInbox from './pyschologistInbox';
// import patientHome from './patientHome';
import {Header, Left, Right, Icon } from 'native-base';
import updateAccount from './updateAccount';
import updatePrice from './updatePrice';
import viewFeedback from './viewFeedback';
9
class psychologistDashboard extends React.Component {
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
  //   constructor() {
  //     super();
  //     this.state = {
  //      username:'',
  //      imageURL: ''
  //     }
    // }
    render() {
  
      const personInffo = this.props.navigation.getParam('personInfo')
      return (
        <View style ={styles.Container}>
          <Text style = {styles.Greeting}>psychologistDashboard{personInffo.name}</Text>
          <Text style = {styles.Greeting}>Hello Mr.{personInffo.name}</Text>
          <Text style = {styles.Greeting}>Joiing date: {personInffo.joiningDate}</Text>
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
        >Change Image</Text>
      </View>
     
  
      <ScrollView>
      <Text style = {{marginLeft:0}}>{props.navigation.getParam('personInfo').name}</Text>
        <DrawerItems {...props}></DrawerItems>
      </ScrollView>
    </SafeAreaView>
  )
  
  const AppDrawerNavigator = createDrawerNavigator({
    Homee: psychologistDashboard,
    Inbox:PyschologistInbox,
    Update_Account: updateAccount,
    Progress_report: progressreport,
    Payments_updated : updatePrice,
    Feedback:viewFeedback 
    
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