import React, { Component } from './node_modules/react';
import { View, Text, StyleSheet } from 'react-native';


class progressreport extends Component {
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
} export default progressreport;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


})