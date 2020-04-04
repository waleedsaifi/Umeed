import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/Login';

import SignupOptions from './components/SignupOptions';
import registeredPatient from './components/AdminPanel/registeredPatient'
import adminDashboard  from './components/AdminPanel/adminDashboard';
import patientDashboard from './components/PatientPanel/patientDashboard';
import psychologistDashboard from './components/PsyPanel/psychologistDashboard';
import speakerDashboard from './components/SpeakerPanel/speakerDashboard';
import writerDashboard from './components/WriterPanel/writerDashboard';
import SignupPatient from './components/SignupPatient';
import SignupPsychologist from './components/SignupPsychologist';
import SignupMotivationalSpeaker from './components/SignupMotivationalSpeaker';
import SignupContentWriter from './components/SignupContentWriter';
import PatientProfile from './components/PatientProfile';
import Feedback from './components/Feedback';
import Story from './components/Story';
import Chat from './components/Chat';
import VideoCallingApp from './components/VideoCallingApp';
import Psychologist from './Screens/Psychologist';  
import Writer from './Screens/Writer'; 
import Speaker from './Screens/Speaker'; 
import Patients from './Screens/Patients';  
import Complaints from './Screens/Complaints';   
import Language from './Screens/Language';   
import ContactUs from './Screens/ContactUs';  
import Help from './Screens/Help';    

const appStackNavigator = createStackNavigator({
 
  // PatientSettingScreen:PatientSettingScreen
  Login: Login,
  registeredPatient: registeredPatient,
  SignupPsychologist:SignupPsychologist,
  SignupMotivationalSpeaker:SignupMotivationalSpeaker,

  SignupContentWriter:SignupContentWriter,
  adminDashboard:adminDashboard,
  patientDashboard: patientDashboard,
  psychologistDashboard:psychologistDashboard,
  PatientProfile:PatientProfile,
  Feedback:Feedback,
  Story:Story,
  Chat:Chat,
  Writer:Writer,
  Speaker:Speaker,
  Patients:Patients,
  Language:Language,
  ContactUs:ContactUs,
  Help:Help,
   speakerDashboard:speakerDashboard,
   writerDashboard:writerDashboard,
   VideoCallingApp:VideoCallingApp,
   Psychologist:Psychologist,
   Complaints: Complaints,
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
