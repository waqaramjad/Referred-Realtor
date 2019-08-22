import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import View from 'react-native'
import firebaseSvc from './resource/FirebaseSvc';
import firebase from 'firebase'
import {AsyncStorage} from 'react-native';
// import console = require('console');
// import console = require('console');

type Props = {
  name?: string,
  email?: string,
  avatar?: string,
};

class ChatMessages extends React.Component<Props> {

  constructor(props) {
    super(props);
    // state= { 

    // }
    // this._storeData()
    var user =   firebase.auth().currentUser
    var UID = user.uid
    var RecevierUID = this.props.navigation.state.params.RecevierUID
       AsyncStorage.setItem('Sender',UID);
       AsyncStorage.setItem('val','UID');
       AsyncStorage.setItem('Recevier',RecevierUID);
  }
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });


  _storeData = async () => {
    try {
      // await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');

    var user =   firebase.auth().currentUser
    var UID = user.uid
    var RecevierUID = this.props.navigation.state.params.RecevierUID
     await  AsyncStorage.setItem('Sender','UID');
     await   AsyncStorage.setItem('Recevier','RecevierUID');
    } catch (error) {
      // Error saving data
    }
  };
  state = {
    messages: [],
    Sender : '', 
    Recevier : ''
  };

  send = messages => {
    var that = this
    var RecevierUID = this.props.navigation.state.params.RecevierUID
var Sender =  firebase.auth().currentUser
var SenderUID = Sender.uid
// alert( RecevierUID)
        for (let i = 0; i < messages.length; i++) {
          const { text, user } = messages[i];
          const message = {
            text,
            user,
            createdAt: firebaseSvc.timestamp,
          };
          this.ref.push(message);
          firebase.database().ref('chats/'+RecevierUID+'/Messages/'+SenderUID).push(message)
      
        }
  };
  
  refOff() {
    this.ref.off();
  }

  refOn = callback => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(firebaseSvc.parse(snapshot)));
  }

  get ref() {
    // this.getData()
  //  alert()
  var RecevierUID = this.props.navigation.state.params.RecevierUID
  var Sender =  firebase.auth().currentUser
  var SenderUID = Sender.uid
    console.log(RecevierUID ,Sender.uid )
  
  // console.log(this.state.Sender)
     return firebase.database().ref('chats/'+SenderUID+'/Messages/'+RecevierUID);
     }



  get user() {
    return {
      // name: "WAQAR AMJAD" ,
      // email: "test3@gmail.com",
      avatar: this.props.navigation.state.params.avatar,
      RecevierUID: this.props.navigation.state.params.RecevierUID,
      // id: 'xSiLKMWW0aWK8u4H6uS7hOH7mEg1',
      // _id: 'xSiLKMWW0aWK8u4H6uS7hOH7mEg1', // need for gifted-chat
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      avatar: this.props.navigation.state.params.avatar,
      id: firebaseSvc.uid,
      _id: firebaseSvc.uid, // need for gifted-chat

    };
  }

  render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={this.send}
          user={this.user}
        />
    );
  }

  componentDidMount() {
    
    this.refOn(message =>{
      // GlobalUser = this.user
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    }
    );
  }
  componentWillMount(){
    var that = this 
    var currentUID = firebase.auth().currentUser
    let value =  AsyncStorage.getItem('Recevier').then((value)=>{
// alert(value)
that.setState({
Sender : currentUID , 
Recevier : value
})
})

  }
  componentWillUnmount() {

    firebaseSvc.refOff();
  }
}

export default ChatMessages;
