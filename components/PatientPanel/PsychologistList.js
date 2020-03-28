import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,Dimensions,FlatList,Image,ImageBackground} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const {width} = Dimensions.get('window');
export default class PsychologistList extends Component {
    render() {
        return (
            <ImageBackground source={require('./../images/background2.jpg')} style={{flex:9}}>
                <View style={styles.top}>
                    <Text style={styles.title}>Psychologist</Text>
                </View>
                <FlatList 
                    data={[{name:'Dr Zubair',Fee:'$ 100/hr',ratings:2,image:require('../images/profile.png')},{name:'Dr. Adnan',Fee:'$ 500/hr',ratings:4,image:require('../images/profile.png')},{name:'Dr. Zulfiqar',Fee:'$ 500/hr',ratings:4,image:require('../images/profile.png')},{name:'Dr. Rohma ',Fee:'$ 100/hr',ratings:3,image:require('../images/profile.png')},{name:'Dr. Ahad ',Fee:'$ 100/hr',ratings:3,image:require('../images/profile.png')},{name:'Dr. Anas ',Fee:'$ 100/hr',ratings:3,image:require('../images/profile.png')}]}
                    keyExtractor={(item,index)=>{
                        return ""+index;
                    }}
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
                            <TouchableOpacity style={styles.button}>
                                <Image style={styles.image} source={item.image}></Image>
                                <View style={{flex:1,justifyContent:"center"}}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.type}>{item.type}</Text>
                                </View>
                                <View>
                                    <Text style={styles.name}>{item.price}</Text>
                                    <Text style={styles.ratings}>{stars}</Text>
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