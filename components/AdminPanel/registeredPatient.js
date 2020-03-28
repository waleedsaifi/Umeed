import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
import { FlatList } from 'react-native-gesture-handler';

class registeredPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            showAlert: false,
            deleteId: '',
            refreshing : false
        }
    }
    componentDidMount() {
        this.getRegisteredPatient();     
    }

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
        this.getRegisteredPatient();
    };

    getRegisteredPatient(){
        // var url = 'http://89.89.89.43:5000/signup';  // Office
        // var url = 'http://192.168.0.108:5000/signup' // Home
        // var url = 'http://192.168.43.21:5000/signup';   // Huawei Mate10 lite
        var url = 'https://desolate-wave-36898.herokuapp.com/signup'  
        return fetch(url)
            .then(res => res.json())
            .then((response) => {
                this.setState({
                    isLoading: false,
                    data: response,
                    refreshing:false
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    sendPatientId(PatientInfo) {
        this.setState({
            showAlert: true,
        
            deleteId: PatientInfo._id
        });
    }
    

    onRefresh(){
        this.setState({refreshing:  true})
        this.getRegisteredPatient();   
    }


    deletePatient = () => {
        // alert(this.state.deleteId)
        // var url = 'http://89.89.89.43:5000/signup';  // Office
        // var url = 'http://192.168.0.108:5000/signup';  // Home 
        // var url = 'http://192.168.43.21:5000/signup';   // Huawei Mate10 lite
        var url = 'https://desolate-wave-36898.herokuapp.com/signup'
       
        fetch(url + "/" + this.state.deleteId, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(response => {
                  console.log('Deleted:', JSON.stringify(response))
                this.hideAlert();
                this.setState({
                    refreshing:true
                })
                    // this.getRegisteredPatient();  
            })
            .catch(error => console.error('Error:', error));     
    }

    render() {
        const { showAlert } = this.state;
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        } else {
            return (
                <View>
                    <FlatList
                   
                      
                        data={this.state.data}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                          
                              
                            <ListItem
                          onPress={() => this.props.navigation.navigate('PatientProfile' ,{PatientInfo: item})}
        
                         
                                roundAvator
                                title={`${item.name}`}
                                subtitle={`${item.email}`}
                               
                                leftAvatar={
                                    { source: require('../img/user_logo.png') }}
                                rightIcon={
                                    <Icon
                                        onPress={() => this.sendPatientId(item)}
                                        // onPress={() => this.showAlert()}
                                        raised name="delete" />
                                }
                            />
                        )}
                        
                        refreshing = { this.state.refreshing}
                        // onRefresh = {this.getRegisteredPatient()}
                        onRefresh={this.onRefresh}
                    />
                  <AwesomeAlert
                        //  data={this.state.data}
                        show={showAlert} showProgress={false}
                        title="Alert" message="Are you sure to remove this Patient?"
                        closeOnTouchOutside={false} closeOnHardwareBackPress={false}
                        showCancelButton={true} showConfirmButton={true}
                        cancelText="cancel" confirmText="Delete"
                        confirmButtonColor="#DD6B55"
                        onCancelPressed={() => { this.hideAlert();}}
                        onConfirmPressed={() => { this.deletePatient();}}
                    />
                </View>
            );
        }
    }
} export default registeredPatient;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
