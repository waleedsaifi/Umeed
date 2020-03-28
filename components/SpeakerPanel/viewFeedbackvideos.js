import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class viewFeedbackvideos extends Component {
    render() {
        const personInffo = this.props.navigation.getParam('personInfo')
        return (
            <View style={styles.container}>
                <Text>Payment module is under construction</Text>
                <Text> {personInffo.name} </Text>
                <Text> {personInffo.contact} </Text>
            </View>
        );
    }
} export default viewFeedbackvideos;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


})