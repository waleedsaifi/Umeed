import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/Login';
// import  from './components/Signup';
import SignupOptions from './components/SignupOptions';
import registeredPatient from './components/AdminPanel/registeredPatient'

// import PatientSettingScreen from './PatientSettingScreen';

import adminDashboard  from './components/AdminPanel/adminDashboard';
import patientDashboard from './components/PatientPanel/patientDashboard';
import SignupPatient from './components/SignupPatient';
   

const appStackNavigator = createStackNavigator({
  // PatientSettingScreen:PatientSettingScreen
  Login: Login,
  registeredPatient: registeredPatient,

  adminDashboard:adminDashboard,
  patientDashboard: patientDashboard,
  // patientHome: patientHome,
  SignupPatient: SignupPatient,
  SignupOptions: SignupOptions,
  // Signup: Signup,
})

const AppContainer = createAppContainer(appStackNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
} export default App;