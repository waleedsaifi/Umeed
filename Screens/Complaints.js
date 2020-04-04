import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,TextInput, ImageBackground} from 'react-native';
import { Textarea } from 'native-base';
import StarRating from 'react-native-star-rating';


class Complaints extends Component {
    constructor(props) {
        super(props);
       
      }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
    render() {
        
  
        return (
          <ImageBackground source={require('././images/background8.jpg')} style={{flex:9}}>
            <View style={styles.container}>
                <Text style={{fontSize:24,color:'black'}}> Complaint </Text>
            
            
           
            <View >
                
                 <TextInput
            style={styles.input}
            placeholder='Enter Your Name'
            autoCapitalize="none"
            placeholderTextColor='black'
            
          />
             <TextInput
            style={styles.input}
            placeholder='Enter The Subject Of Complaint'
            autoCapitalize="none"
            placeholderTextColor='black'
            
          />
        
            <Text>Enter Your Complaint</Text>
          <Textarea  style={styles.input1}>

          </Textarea>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}
              
            >SUBMIT
                   </Text>
          </TouchableOpacity>
            </View>
            </View>
            </ImageBackground>
        );
    }
} export default Complaints;

const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 5,
      marginRight: 5,
    
    },
    input: {
      width: 300,
      fontWeight: '500',
      height: 50,
      backgroundColor: '#28a745',
      opacity: 0.5,
      marginBottom: 15,
      borderRadius: 10,
      color: 'white',
      paddingHorizontal: 10
    },   input1: {
        width: 300,
        fontWeight: '600',
        height: 300,
        backgroundColor: '#28a745',
        opacity: 0.5,
        marginBottom: 15,
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 10
        
      },
      buttonContainer: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop:10,
        borderRadius: 14,
        width:110,
        height:50,
        marginLeft:90

      },
      buttonText: {
        color: 'black',
        fontWeight: '900',
        textAlign: 'center',
        borderRadius: 14,
        paddingHorizontal: 15
      },


})