import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,TextInput,Image,TouchableOpacity,DatePickerAndroid} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import RadioForm from 'react-native-simple-radio-button';
const CardOptions = [
    { label: "Credit", value: 0 },
    { label: "Debit", value: 1 },
    { label: "Master", value: 2 },
  ];
class patientPayments extends Component {
    
    constructor() {
        super();
        this.state = {
          showAlert: false,
          username: '',
          usererr:'',
          email: '',
          emailerr:'',
          Accountno: '',
          passerr:'',
          phone_number: '',
          phoneerr:'',
          gender: -1,
          age: '',
          ageerr:'',
          date: '',
          card:'',
          userRole:''
        }
      }
      myfun = () => {
    
        const { username, Accountno, age, } = this.state;
        
      
      
          let seg = /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/ ; 
        if(seg.test(username) === false) 
          { 
          this.setState({ usererr: "Enter The name like: (john)" })
           
          } 
          else { 
            this.setState({ usererr: "" })
          
          }
         
         
        
        
       
    }
    myfun2 = () => {
    
        const { username, Accountno, age, } = this.state;
        
         
          if (age.length < '20') {
            this.setState({ ageerr: "Enter The Correct Account No" })
          }
          else { 
            this.setState({ ageerr: "" })
          }
        
        
        
       
    }
    myfun1 = () => {
    
        const { username, Accountno, age, } = this.state;
           
         
          if (Accountno.length <= '16') {
            this.setState({ CNICerr: "Enter the  Valid Card No" })
          }
          else { 
            this.setState({ CNICerr: "" })
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
    }
    render() {
        const personInffo = this.props.navigation.getParam('personInfo')

            return (
                <KeyboardAwareScrollView >
                    <ImageBackground source={require('./../images/background8.jpg')} style={{flex:9}}>
              <View>
              <Text style={{color:'black', fontSize:22, marginVertical:5,textAlign:'center'}}>Patient Payments</Text>
              <Image source={require('./../images/card.png')}style={{ width:300, height:200, marginLeft: 28, marginTop: 10}} ></Image>
              <Text style={{color:'black', fontSize:18, marginVertical:5,marginLeft:5}}>Name:</Text>  
              <TextInput
            style={styles.input}
            placeholder='Enter The Name (Hammad)'
            autoCapitalize="none"
            placeholderTextColor='black'
            onBlur={()=> this.myfun()}
            onChangeText={(text) => {this.setState({ username: text })}}
          />
          <Text style ={{color:'red',textAlign:'center'} }>{this.state.usererr}</Text>
          <Text style={{color:'black', fontSize:18, marginVertical:5,marginLeft:5}}>Account No:</Text>  
          <TextInputMask style={styles.input}
            placeholder='Enter your 20 Digit Account No'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}
            options={{
              mask: '99999999999999999999'
            }}
            value={this.state.age}
            onBlur={()=> this.myfun2()}
            onChangeText={text => {
              this.setState({
                age: text
              })
            }}
          />
          <Text style ={{color:'red',textAlign:'center'} }>{this.state.ageerr}</Text>
<Text style={{color:'black', fontSize:18, marginVertical:5,marginLeft:5}}>Card number.:</Text> 
        <TextInputMask style={styles.input}
          
          placeholder='Enter The Valid Card No'
          placeholderTextColor="black"
          keyboardType='phone-pad'
          type={'custom'}
          options={{
            mask: '9999-9999-9999-9999'
          }}
          value={this.state.Accountno}
          onBlur={()=> this.myfun1()}
          onChangeText={text => {this.setState({Accountno: text }) }}
        />      
        <Text style ={{color:'red',textAlign:'center'} }>{this.state.CNICerr}</Text>
        <Text style={{color:'black', fontSize:18, marginVertical:5,marginLeft:5}}>Card ExpiryDate:</Text> 
              <View style={styles.date}>
                    <Text style={styles.dateText}>{this.state.date}</Text>
                    <TouchableOpacity style={styles.dateButton} onPress={this.pickDate}>
                        {/* <EvilIcons style={styles.dateIcon} ></EvilIcons> */}
                    
                    </TouchableOpacity>
                </View>
    
                <Text style={{color:'black', fontSize:18, marginVertical:5,marginLeft:5}}>Card Detail:</Text>
                <View style={{marginLeft:85}}>
          <RadioForm
            radio_props={CardOptions}
            onPress={(val) => { this.setState({ card: val }) }}
            initial={-1}
            formHorizontal={true}
            labelHorizontal={false}
            buttonSize={10}
          />
              </View>

              <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}
             // onPress={() => this.myfun()}
            >Make Payement
                   </Text>
          </TouchableOpacity>
          <Text style={{color:'black', fontSize:18, marginVertical:5,marginLeft:5}}>Make Payement Through</Text>
          <View style={{flexDirection:'row',padding:20}}>
        <TouchableOpacity onPress={() => ('https://www.jazzcash.com.pk/shop/money-transfer-shop/')}>
                    <Image source={require('./../images/pic12.jpg')} style={{width:150,height:100,padding:20}}></Image>
                    <Text style={{color:'black',marginVertical:1}}>Jazz Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity >
                    <Image source={require('./../images/pic14.png')} style={{width:150,height:100,padding:20,marginLeft:10}}></Image>
                    <Text style={{color:'black',marginVertical:1,marginLeft:10}}>Easy Paisa</Text>
        </TouchableOpacity>
        </View>
              </View>
              </ImageBackground>
              </KeyboardAwareScrollView>
        );
    }
}
 export default patientPayments;

const styles = StyleSheet.create({

    input: {
        width: 300,
        fontWeight: '500',
        height: 50,
        backgroundColor: '#28a745',
        opacity: 0.5,
        marginBottom: 15,
        marginLeft:25,
        borderRadius: 10,
        color: 'black',
        borderColor:'black',
        paddingHorizontal: 10
        
      },
      date:{
        width:'65%',
        borderRadius:4,
        marginLeft:50,
        borderColor:'rgba(255,255,255,0.4)',
        borderWidth:1,
        backgroundColor:'#28a745',
        marginVertical:10,
        flexDirection:"row",
        overflow:'hidden',
        
    },dateText:{
        color:'black',
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
      color:'black',
      fontSize:34,
    },
    buttonContainer: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop:10,
        borderRadius: 14,
        width:200,
        height:50,
        marginLeft:70,
        
      },
      buttonText: {
        color: 'black',
        fontWeight: '900',
        textAlign: 'center',
        borderRadius: 14,
        paddingHorizontal: 15
      },


})