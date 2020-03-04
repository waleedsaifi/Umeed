import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/Login';
// import  from './components/Signup';
import SignupOptions from './components/SignupOptions';
import registeredPatient from './components/AdminPanel/registeredPatient'

// import PatientSettingScreen from './PatientSettingScreen';

import adminDashboard  from './components/AdminPanel/adminDashboard';
import patientDashboard from './components/PatientPanel/patientDashboard';
import psychologistDashboard from './components/PsychologistPanel/progressreport';
import speakerDashboard from './components/SpeakerPanel/speakerDashboard';
import SignupPatient from './components/SignupPatient';
import SignupPsychologist from './components/SignupPsychologist';
import SignupMotivationalSpeaker from './components/SignupMotivationalSpeaker';
import SignupContentWriter from './components/SignupContentWriter';
   

const appStackNavigator = createStackNavigator({
   psychologistDashboard:psychologistDashboard,
  // PatientSettingScreen:PatientSettingScreen
  Login: Login,
  registeredPatient: registeredPatient,
  SignupPsychologist:SignupPsychologist,
  SignupMotivationalSpeaker:SignupMotivationalSpeaker,
  SignupContentWriter:SignupContentWriter,
  adminDashboard:adminDashboard,
  patientDashboard: patientDashboard,
    
   speakerDashboard:speakerDashboard,
  // patientHome: patientHome,
  SignupPatient: SignupPatient,
  SignupOptions: SignupOptions,
  // Signup: Signup,
})

const AppContainer = createAppContainer(appStackNavigator);
// const AppDrum = createAppContainer(appStackNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
} 

export default App;
