import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,TextInput} from 'react-native';
import { Textarea } from 'native-base';
import StarRating from 'react-native-star-rating';


class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 1
        };
      }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
    render() {
        
  
        return (
            <View style={styles.container}>
                <Text style={{fontSize:24,color:'black'}}> Feedback </Text>
            
            
           
            <View >
                
                 <TextInput
            style={styles.input}
            placeholder='Enter Your Name'
            autoCapitalize="none"
            placeholderTextColor='black'
            
          />
             <TextInput
            style={styles.input}
            placeholder='Enter Your Doctor Name'
            autoCapitalize="none"
            placeholderTextColor='black'
            
          />
          <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
            <Text>Enter Your Feedback</Text>
          <Textarea  style={styles.input1}>

          </Textarea>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}
              
            >SUBMIT
                   </Text>
          </TouchableOpacity>
            </View>
            </View>
        );
    }
} export default Feedback;

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
      },
      buttonText: {
        color: 'black',
        fontWeight: '900',
        textAlign: 'center',
        borderRadius: 14,
        paddingHorizontal: 15
      },


})