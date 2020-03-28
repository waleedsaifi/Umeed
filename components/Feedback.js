import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Feedback extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                <Text>Feedback module is under construction</Text>
               
            </View>
        );
    }
} export default Feedback;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


})