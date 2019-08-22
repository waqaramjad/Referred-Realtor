import React, { Component } from 'react';
import { Container, Header, Content,Title, List, ListItem, Left, Body, Right, Thumbnail, Text, Button  } from 'native-base';
import firebase, { database } from 'firebase';
import {Expo, AppLoading } from "expo";
import { View, ScrollView, StyleSheet ,StatusBar ,  TouchableOpacity} from "react-native";
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import firebaseSvc from './resource/FirebaseSvc';
import {AsyncStorage} from 'react-native';


export default class Chat extends Component {
  
  constructor(props){
		super(props)
		this.state={
    
     loading: true , 
     Userlist  : undefined

     		
    }
    
    const { state, navigate } = this.props.navigation;

	}


  static navigationOptions = {
    header : null  }
componentWillMount(){
    var that = this
  var UID = firebase.auth().currentUser
  var UserUID = UID.uid
    console.log('dataSnapshot.val() 1')
    firebase.database().ref('users/').once('value')
    .then(function(dataSnapshot) {
        // console.log('dataSnapshot.val()')
        console.log(dataSnapshot.val())
        var List = dataSnapshot.val()
        delete List[UserUID]
        that.setState({
            Userlist : List
        })
     });
 
    
    // console.log(this.state.UserList)
    console.log('UserList')
}

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('./resource/Roboto.ttf'),
      'Roboto_medium': require('./resource/Roboto_medium.ttf'),
  ...Ionicons.font,
    });
            this.setState({ loading: false });

  }


  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Recevier');
      const value2 = await AsyncStorage.getItem('Sender');
      if (value !== null) {
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
var that = this 
     if (this.state.loading) {
      return <AppLoading />;
    }
    // console.log(this.state)
    var UserListState = this.state.Userlist
    return (
        <Container>
        <Header style={{backgroundColor : 'white' }} >

<Left/>
  
  {/* </Left>    */}
  <Body>
  <Text style={{fontSize:24}}>Chat</Text> 

    </Body>       
          {/* <Right>
            <Button onPress={()=>{that.props.navigation.navigate('Invite')}}>

            <Text>
            Invite People
              </Text> 
            </Button>


          </Right> */}
        </Header>
        <Content>
          <List>
          {
                

                this.state.Userlist != undefined ?
                Object.keys(UserListState).map(function(key, index) {
                    // console.log(key)
                    var User = UserListState[key]
                    return(
                        <ListItem avatar key={key} onPress={()=>{
                          // that._storeData(key)
                          that.props.navigation.navigate('ChatMessages', {
                            name: User.name,
                            email: User.email,
                            avatar:User.avatar,
                            RecevierUID : key
                          });}}>
                        <Left>
                          <Thumbnail source={{ uri:User.avatar }} />
                        </Left>
                        <Body>
                          <Text>{User.name}</Text>
                        </Body>
                        
                      </ListItem>
                    )
                  })
                :null
            }
            {/* <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem> */}

            {/* <Button onPress={()=>{this._storeData()}}>
<Text>_storeData</Text>
            </Button>
            <Button onPress={()=>{this._retrieveData()}}>
<Text>_retrieveData</Text>

            </Button> */}
          </List>
        </Content>
      </Container>
    );
  }
}



const styles = StyleSheet.create({

  textOfaccountChange : {
    marginTop : '3%' , 
    color: 'black', opacity: 0.7, fontSize: 15 , 
    marginLeft : '3%' , 
  } , 
  btn :{
    marginTop: '2%  '
  } , 
  Login : {
    marginLeft : '3%' , marginRight : '3%' , marginTop: '3%' , backgroundColor  : '#0F91DC'
  } , 
  mainColor : {
    backgroundColor  : '#0F91DC'
  }
})


