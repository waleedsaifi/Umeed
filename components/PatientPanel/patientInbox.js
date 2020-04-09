
import React, { PureComponent } from 'react';
import { View, SafeAreaView, Text, ImageBackground,StyleSheet,FlatList,Image,TouchableOpacity } from 'react-native';





// const chatClient = new StreamChat('y4s364brhrg8');
// const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2hyaWxsLW1vdW50YWluLTEifQ.d5eunqnGAfJRzh8AZfjg1UD-RALMu7JPsYKbFc5Spcg';
// const user = {
//   id: 'shrill-mountain-1',
//   name: 'Shrill mountain',
//   image:
//     'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
// };

// chatClient.setUser(user, userToken);

class patientInbox extends PureComponent {
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
                    data={[{name:'Dr Usman',type:'Messages',image:require('./../images/aa.jpg')},{name:'Dr Kashaf',type:'Messages',image:require('./../images/pic1.jpg')},{name:'Dr Bisma',type:'Messages',image:require('./../images/a1.jpg')}]}
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
      // <SafeAreaView>
      //   <Chat client={chatClient}>
      //     <View style={{ display: 'flex', height: '100%', padding: 10 }}>
      //       <ChannelList
      //         filters={{ type: 'messaging', members: { $in: ['shrill-mountain-1'] } }}
      //         sort={{ last_message_at: -1 }}
      //         Preview={ChannelPreviewMessenger}
      //         onSelect={() => {
      //           this.props.navigation.navigate('Chat');
      //         }}
      //       />
      //     </View>
      //   </Chat>
      // </SafeAreaView>
    );
  }
}
export default patientInbox;
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