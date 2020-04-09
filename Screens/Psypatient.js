import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,Dimensions,FlatList,Image,ImageBackground} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { ListItem, Icon } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';

const {width} = Dimensions.get('window');
export default class psypatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            showAlert: false,
            deleteId: '',
            refreshing : false,
        
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
        var url = 'https://desolate-wave-36898.herokuapp.com/getAccount/Patients'  
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




  
    render() {
        const { showAlert } = this.state;
        return (
            <ImageBackground source={require('././images/background2.jpg')} style={{flex:9}}>
                <View style={styles.top}>
                    <Text style={styles.title}>Patients</Text>
                </View>
                <FlatList 
                   // data={[{name:'Dr Zubair',Fee:'$ 100/hr',ratings:2,image:require('../images/profile.png')},{name:'Dr. Adnan',Fee:'$ 500/hr',ratings:4,image:require('../images/profile.png')},{name:'Dr. Zulfiqar',Fee:'$ 500/hr',ratings:4,image:require('../images/profile.png')},{name:'Dr. Rohma ',Fee:'$ 100/hr',ratings:3,image:require('../images/profile.png')},{name:'Dr. Ahad ',Fee:'$ 100/hr',ratings:3,image:require('../images/profile.png')},{name:'Dr. Anas ',Fee:'$ 100/hr',ratings:3,image:require('../images/profile.png')}]}
                   data={this.state.data} 
                   keyExtractor={item => item._id}

                    style={{width:'100%'}}
                    renderItem={({item})=>{
                        let arrayToShow = ['md-star-outline','md-star-outline','md-star-outline','md-star-outline','md-star-outline'];
                        for(let i = 0;i<item.ratings;i++){
                            arrayToShow[i] = 'md-star';
                        }
                        const stars = arrayToShow.map((element,index)=>{
                            return(
                                <Ionicons key={index} style={styles.star} name={element}></Ionicons>
                            );
                        });
                        return(
                            <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('PatientProfile' ,{PatientInfo: item})}>
                                
                                <Image source={require('../img/user_logo.png') }style={styles.image}></Image>
                                <View style={{flex:1,justifyContent:"center"}}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.type}>{item.email}</Text>
                                </View>
                               
                               
                            </TouchableOpacity>
                            
                            
                        )
                    
                    }}
                ></FlatList>
               
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    top:{
        flexDirection:"row",
        paddingVertical:20,
        alignItems:"center"
    },back:{
        fontSize:30,
        color:'#ffffff',
        padding:10,
        paddingLeft:20
    },title:{
        fontSize:26,
        
        color:'#ffffff',
        flex:1,
        paddingLeft:width*0.26
    },button:{
        flexDirection:"row",
        padding:20,
        borderBottomColor:'rgba(255,255,255,0.4)',
        borderBottomWidth:0.2,
        alignItems:"center",
        paddingVertical:20,
        width:'100%'
    },image:{
        borderRadius:100,
        resizeMode:"stretch",
        width:60,
        height:60
    },name:{
        
        color:'#ffffff',
        fontSize:20,
        padding:10
    },type:{
        
        color:'rgba(255,255,255,0.5)',
        fontSize:15,
        paddingLeft:10
    },price:{

    },ratings:{
        flexDirection:"row",
        padding:10
    },star:{
        color:'#e6990b',
        fontSize:18
    }
})