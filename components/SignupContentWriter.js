import React, { Component } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import AwesomeAlert from 'react-native-awesome-alerts';
// import * as ImagePicker from 'expo-image-picker';

import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  image,
  DatePickerAndroid,
  EvilIcons 
} from 'react-native'
import RadioForm from 'react-native-simple-radio-button';

const genderOptions = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
  { label: "Others", value: 2 },
];

class SignupContentWriter extends Component {
  
  constructor() {
    super();
    this.state = {
      showAlert: false,
      username: '',
      usererr:'',
      email: '',
      emailerr:'',
      password: '',
      passerr:'',
      phone_number: '+92',
      phoneerr:'',
      gender: -1,
      age: '',
      ageerr:'',
      link:'',
      CNIC: '',
      CNICerr:''
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
    
    const { username, email, password, phone_number, gender, age,link, CNIC } = this.state;
    
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
    if(reg.test(email) === false) 
    {  
    this.setState({ emailerr: "email@gmail.com" }) 
    } 
    else { 
      this.setState({ emailerr: "" })
    }
  
      let seg = /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/ ; 
    if(seg.test(username) === false) 
      { 
      this.setState({ usererr: "Enter The name like: (john)" })
       
      } 
      else { 
        this.setState({ usererr: "" })
      
      }
       if (phone_number.length <= '11') {
        this.setState({ phoneerr: "Please Enter The Correct Number" })
      }
      else { 
        this.setState({ phoneerr: "" })
      }
      if (age <= '15') {
        this.setState({ ageerr: "Age must be greater than 15" })
      }
      else { 
        this.setState({ ageerr: "" })
      }
      if (CNIC.length <= '13') {
        this.setState({ CNICerr: "Enter the 13 digit Valid CNIC" })
      }
      else { 
        this.setState({ CNICerr: "" })
      }
    
      if (password.length <= '3') {
      this.setState({ passerr: "Password Length Must be Greater Than 3" })
    }
    else { 
      this.setState({ passerr: "" })
    }
    if (username == "" || password == '' || email == "" || phone_number == "" || age == "" || gender == -1 || link == "" || CNIC== "") {
      this.setState({ error: "" })
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
      signupInfo.link = this.state.link;
      signupInfo.gender = this.state.gender;
      signupInfo.joiningDate =new Date("<YYYY-mm-ddTHH:MM:ssZ>").getDate()
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
  

  pickDate = async()=>{
    try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          date: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            const date = new Date(year,month,day).toLocaleDateString();
            this.setState({
                date
            })
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
};

//   _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       aspect: [4, 3],
//       quality: 1
//     });

//     alert(result.uri);
//     console.log(result)

//     if (!result.cancelled) {
//       this.setState({ image: result.uri });
//     }
//   };


  render() {
    const { showAlert } = this.state;
    return (
      //  <ScrollView  >
      <KeyboardAwareScrollView >
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require('./img/umeedLogo.png')} />
          <View style={styles.logoTextContainer}>
            <Text style={styles.logoText}>CONTENT WRITER ACCOUNT  </Text>
          </View>
        </View>
       
        
       
        <View style={styles.container}>
          <Text style={{ color: 'red', textAlign: 'center' }} >
            {this.state.error}
          </Text>

          <TextInputMask style={styles.input}
            placeholder='Phone(92)'
            placeholderTextColor="#fff"
            keyboardType='phone-pad'
            type={'custom'}
    
            options={{
              mask: '9999 9999999'
            }}
            value={this.state.phone_number}
            onBlur={()=> this.myfun()}
            onChangeText={text => {
              this.setState({
                phone_number: text
              })
            }}
          />
<Text style ={{color:'red'} }>{this.state.phoneerr}</Text>
          <TextInputMask style={styles.input}
          
            placeholder='CNIC'
            placeholderTextColor="#FFF"
            keyboardType='phone-pad'
            type={'custom'}
            options={{
              mask: '99999-9999999-9'
            }}
            value={this.state.CNIC}
            onBlur={()=> this.myfun()}
            onChangeText={text => {
              this.setState({
                CNIC: text
              })
            }}
          />
          <Text style ={{color:'red'} }>{this.state.CNICerr}</Text>

          <TextInputMask style={styles.input}
            placeholder='Age'
            placeholderTextColor="#FFF"
            keyboardType='phone-pad'
            type={'custom'}
            options={{
              mask: '99'
            }}
            value={this.state.age}
            onBlur={()=> this.myfun()}
            onChangeText={text => {
              this.setState({
                age: text
              })
            }}
          />
 <Text style ={{color:'red'} }>{this.state.ageerr}</Text>
          <TextInput
            style={styles.input}
            placeholder='Username'
            autoCapitalize="none"
            placeholderTextColor='white'
            onBlur={()=> this.myfun()}
            onChangeText={(text) => {this.setState({ username: text })}}
          />
 <Text style ={{color:'red'}}>{this.state.usererr}</Text>
          <TextInput
            keyboardType='email-address'
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
             onBlur={()=> this.myfun()}
            onChangeText={(text) => {this.setState({ email: text })}}
            required
          />
          <Text style ={{color:'red'}}>{this.state.emailerr}</Text>
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onBlur={()=> this.myfun()}
            onChangeText={password => this.setState({ password })}
          />
           <Text style ={{color:'red'} }>{this.state.passerr}</Text>
           <TextInput
            style={styles.input}
            placeholder='Place The Link Of Content'
            autoCapitalize="none"
            placeholderTextColor='blue'
            onChangeText={link => this.setState({ link})}
          />
          <View style={styles.date}>
                    <Text style={styles.dateText}>{this.state.date} Date</Text>
                    <TouchableOpacity style={styles.dateButton} onPress={this.pickDate}>
                        {/* <EvilIcons style={styles.dateIcon} ></EvilIcons> */}
                    
                    </TouchableOpacity>
                </View>
          <Text style={styles.genderText}>Gender</Text>

          <RadioForm
            radio_props={genderOptions}
            onPress={(val) => { this.setState({ gender: val }) }}
            initial={-1}
            formHorizontal={true}
            labelHorizontal={false}
            buttonSize={10}
          />
           {/* <View style={styles.hammie}>
        <Button
          title="Select Document"
          onPress={this._pickImage}
          style={{backgroundColor: 'lightblue'}}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View> */}

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
  
}

export default SignupContentWriter;

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
    marginTop:10,
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
//   hammie: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  date:{
    width:'65%',
    borderRadius:4,
    borderColor:'rgba(255,255,255,0.4)',
    borderWidth:1,
    backgroundColor:'#3498db',
    marginVertical:10,
    flexDirection:"row",
    overflow:'hidden'
},dateText:{
    color:'white',
    // fontFamily:'open-sans',
    width:'80%',
    fontSize:14,
    borderRightColor:'rgba(255,255,255,0.4)',
    borderRightWidth:1,
    padding:15
},dateButton:{
    alignItems:"center",
    justifyContent:"center",
    flex:1
},dateIcon:{
  color:'#ffffff',
  fontSize:34,
}
});