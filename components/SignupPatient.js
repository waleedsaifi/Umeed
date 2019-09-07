import React, { Component } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import AwesomeAlert from 'react-native-awesome-alerts';

import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import RadioForm from 'react-native-simple-radio-button';


const genderOptions = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
  { label: "Others", value: 2 },
];
class SignupPatient extends Component {

  constructor() {
    super();
    this.state = {
      showAlert: false,
      username: '',
      email: '',
      password: '',
      phone_number: '',
      gender: -1,
      age: '',
      CNIC: ''
    }
  }
  static navigationOptions = {
    title: "UMEED",
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#3498db',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginHorizontal: '40%'
    },
  };

  myfun = () => {
    const { username, email, password, phone_number, gender, age, CNIC } = this.state;
    // alert(CNIC);
    if (username == "" || password == '' || email == "" || phone_number == "" || age == "" || gender == -1 || CNIC== "") {
      this.setState({ error: "Please make sure you fill all the required fields" })
    } else if (age <= '15') {
      this.setState({ error: "Age must be greater than 15" })
    }
    else {
      // this.setState({error:"Form Submitted successfully"})
      let signupInfo = {}
      signupInfo.contact = this.state.phone_number;
      signupInfo.cnic = this.state.CNIC;
      signupInfo.age = this.state.age;
      signupInfo.name = this.state.username;
      signupInfo.email = this.state.email;
      signupInfo.password = this.state.password;
      signupInfo.gender = this.state.gender;
      // console.warn(signupInfo);
      // var url = 'http://89.89.89.43:5000/signup';  // Office
      // var url = 'http://192.168.0.108:5000/signup';  // Home 
      // var url = 'http://192.168.43.21:5000/signup';   // Huawei Mate10 lite
      var url = 'https://desolate-wave-36898.herokuapp.com/signup'
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(signupInfo), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(response => {
          console.log('Success:', JSON.stringify(response))
          // alert("Form Submitted successfully")
          this.setState({showAlert:true});
        })
        .catch(error => console.error('Error:', error));
    }
  }

  render() {
    const { showAlert } = this.state;
    return (
      //  <ScrollView  >
      <KeyboardAwareScrollView >
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require('./img/umeedLogo.png')} />
          <View style={styles.logoTextContainer}>
            <Text style={styles.logoText}>PATIENT ACCOUNT  </Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={{ color: 'red', textAlign: 'center' }} >
            {this.state.error}
          </Text>

          <TextInputMask style={styles.input}
            placeholder='Phone Number'
            placeholderTextColor="#FFF"
            keyboardType='phone-pad'
            type={'custom'}
            options={{
              mask: '9999 9999999'
            }}
            value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                phone_number: text
              })
            }}
          />

          <TextInputMask style={styles.input}
            placeholder='CNIC'
            placeholderTextColor="#FFF"
            keyboardType='phone-pad'
            type={'custom'}
            options={{
              mask: '99999-9999999-9'
            }}
            value={this.state.CNIC}
            onChangeText={text => {
              this.setState({
                CNIC: text
              })
            }}
          />

          <TextInputMask style={styles.input}
            placeholder='Age'
            placeholderTextColor="#FFF"
            keyboardType='phone-pad'
            type={'custom'}
            options={{
              mask: '99'
            }}
            value={this.state.age}
            onChangeText={text => {
              this.setState({
                age: text
              })
            }}
          />

          <TextInput
            style={styles.input}
            placeholder='Username'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={username => this.setState({ username })}
          />

          <TextInput
            keyboardType='email-address'
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={password => this.setState({ password })}
          />
          <Text style={styles.genderText}>Gender</Text>

          <RadioForm
            radio_props={genderOptions}
            onPress={(val) => { this.setState({ gender: val }) }}
            initial={-1}
            formHorizontal={true}
            labelHorizontal={false}
            buttonSize={10}
          />

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}
              onPress={() => this.myfun()}
            >SIGNUP
                   </Text>
          </TouchableOpacity>

                    <AwesomeAlert
                        //  data={this.state.data}
                        show={showAlert} showProgress={false}
                        title="Congratulation!" message="Your Form Submitted Successfully"
                        closeOnTouchOutside={false} closeOnHardwareBackPress={false}
                        showCancelButton={false} showConfirmButton={true}
                        // cancelText="cancel"
                        confirmText="Back to Login"
                        confirmButtonColor="#DD6B55"
                        // onCancelPressed={() => { this.hideAlert();}}
                        onConfirmPressed={() => { this.props.navigation.navigate('Login')}}
                    />

        </View>
      </KeyboardAwareScrollView>

    );
  }
} export default SignupPatient;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  input: {
    width: 300,
    fontWeight: '500',
    height: 50,
    backgroundColor: '#3498db',
    opacity: 0.5,
    marginBottom: 15,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10
  },
  genderText: {
    width: 350,
    height: 55,
    marginLeft: 40,
    padding: 8,
    color: '#3498db',
    fontSize: 18,
    fontWeight: '500',
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
    borderRadius: 14,
    paddingHorizontal: 15
  },
  logoContainer: {
    flexGrow: 1,
    marginVertical: 10,
    flexDirection: 'row'
  },
  logo: {
    width: 70,
    height: 70
  },
  logoTextContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 10
  },
  logoText: {
    color: '#3498db',
    fontWeight: '900',
    fontSize: 18,
  },
})