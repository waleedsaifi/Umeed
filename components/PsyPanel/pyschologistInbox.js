
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,FlatList,Image,TouchableOpacity } from 'react-native';

class pyschologistInbox extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: (
      <Text style={{ fontWeight: 'bold' }}>Awesome Conversations</Text>
    ),
  });

  render() {
    return (
      <View>
     
                        <Text style={{ fontWeight: 'bold',textAlign:'center'}}>Inbox</Text>
                        
                <FlatList 
                    data={[{name:'Arslan',type:'Messages',image:require('./../images/a.jpg')},{name:'Faizan',type:'Messages',image:require('./../images/user.jpg')},{name:'Ahmed',type:'Messages',image:require('./../images/admin.jpg')},{name:'Ali',type:'Messages',image:require('./../images/f.jpg')}]}
                    keyExtractor={(item,index)=>{
                        return ""+index;
                    }}
                    style={{width:'100%'}}
                    renderItem={({item})=>{
                        let arrayToShow = ['md-star-outline','md-star-outline','md-star-outline','md-star-outline','md-star-outline'];
                        for(let i = 0;i<item.ratings;i++){
                            arrayToShow[i] = 'md-star';
                        }
                      
                        return(

                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Chat')}>
                                <Image style={styles.image} source={item.image}></Image>
                                <View style={{flex:1,justifyContent:"center"}}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.type}>{item.type}</Text>
                                
                                </View>
                               
                            </TouchableOpacity>
                        )
                    }}
                ></FlatList>
                </View>
     
    );
  }
}
export default pyschologistInbox;
const styles = StyleSheet.create({
 button:{
      flexDirection:"row",
      padding:20,
      borderBottomColor:'black',
      borderBottomWidth:0.2,
      alignItems:"center",
      paddingVertical:10,
      width:'100%'
  },image:{
    width:40, height:40, marginLeft: 5, marginTop: 10,borderRadius:99
  },name:{
     
      color:'black',
      fontSize:14,
      padding:10,
      marginLeft:20
  },type:{
    
    color:'black',
    fontSize:8,
    paddingLeft:30
}
})