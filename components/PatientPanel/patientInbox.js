import React from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import io from "socket.io-client";


class patientInbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages:[]
    }
    
  }
 
  componentDidMount() {
    var url = "https://desolate-wave-36898.herokuapp.com";
    // var url = "http://192.168.0.106:5000";
    this.socket = io(url);

    this.socket.on("chat message", msg => {
      this.setState({
        chatMessages:[...this.state.chatMessages, msg ] 
      });
    })
  }

  submitChatMessage(){
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({chatMessage: ""});

  }
  render() {
    // const personInffo = this.props.navigation.getParam('personInfo')
    const chatMessages = this.state.chatMessages.map(chatMessage =>( 
    <Text key={chatMessage}>{chatMessage}</Text>));
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderWidth: 2 }}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
          this.setState({ chatMessage });
          }}
        />
        {/* <Text>{personInffo.name}</Text> */}
        {chatMessages}
      </View>
    );
  }
}
export default patientInbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});