import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body , Form, Label} from "native-base";
import Expo from "expo";
import gstyles from '../styles/style'

var myUId = ''


export default class Edit extends Component { 
  static navigationOptions = {
    header : null
  }
  constructor(props) {
    super(props);
    this.state = {
    loading: true , 
    Name: ' Senita Zen',
    Location: ' Canada',
    Experience: '  8 years',
    EmailAdress: ' xyz@gmail.com',
    CompanyName: ' MS',
    SnapchatUsername: 'Senita345',
    SkypeUsername: 'Senita345',
    // Name: ' ',
    };

    const { state, navigate } = this.props.navigation;

    myThis = this
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
    render() {

      const { navigate } = this.props.navigation; 
      return (
        <Container style={styles.container}>
          {/* <Header /> */}
          <Header style = {gstyles.mainNav}>
          <Left>
          
            {/* <Button transparent  onPress={()=>{this.props.navigator.push({title: 'Home'})}} > */}
            <Button transparent  onPress={()=>{navigate("tab")}} >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body/>
          <Right>
          <Button transparent   >
             <Text style={{color:'white',fontSize:15 }}>Update</Text>
            </Button>
          </Right>
        </Header>
       <Content>
       <Card>
         <CardItem header>
         <Left/>
         <Body style={styles.centerContent}>

           <Text style ={styles.titleText}>{this.state.Fname}</Text>
         </Body>
         <Right/>
         </CardItem>
         <CardItem>
           <Body style={styles.centerContent}>
          
           <View >

           <Thumbnail source={{ uri: 'https://girlinthegarage.net/wp-content/uploads/2015/03/IMG_4790-jen-profile-0215-round.png' }} style={styles.imageSize} />
           </View>
           


           </Body>
         </CardItem>
         <CardItem footer>
         <Left/>
         <Body/>
         <Right>
         <Button  light>
            <Text>Change Picture </Text>
          </Button>
          </Right>
         </CardItem>
      </Card>
         <Card >
         <CardItem header>
            {/* <Left/> */}
            <Body style={styles.centerContent}>
            <Text style ={styles.titleText}> Bio </Text>
            </Body>
            </CardItem>
            </Card>
            
<Form>
            <Item fixedLabel>
              <Label>Name</Label>
              <Input value={this.state.Name} onChangeText={Name => this.setState({Name})}/>
            </Item>
            <Item fixedLabel>
              <Label>Location</Label>
              <Input value={this.state.Location} onChangeText={Location => this.setState({Location})}/>
            </Item>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input value={this.state.Name} onChangeText={Name => this.setState({Name})}/>
            </Item>
            <Item fixedLabel>
              <Label>Experience</Label>
              <Input value={this.state.Experience} onChangeText={Experience => this.setState({Experience})}/>
            </Item>
            <Item fixedLabel>
              <Label>Email Adress</Label>
              <Input value={this.state.EmailAdress} onChangeText={EmailAdress => this.setState({EmailAdress})}/>
            </Item>
            <Item fixedLabel>
              <Label>Company Name</Label>
              <Input value={this.state.CompanyName} onChangeText={CompanyName => this.setState({CompanyName})}/>
            </Item>
            <Item fixedLabel>
              <Label>Snapchat Username</Label>
              <Input value={this.state.SnapchatUsername} onChangeText={SnapchatUsername => this.setState({SnapchatUsername})}/>
            </Item>
            <Item fixedLabel>
              <Label>Skype Username</Label>
              <Input value={this.state.SkypeUsername} onChangeText={SkypeUsername => this.setState({SkypeUsername})}/>
            </Item>
            
          </Form>

     </Content>
           
            
      </Container>

      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },

    centerContent : {
     
        
        justifyContent: 'center',
        alignItems: 'center',
     
    }, 
    bodyContent : {
      marginLeft : '4%'
    } , 
    buttonofSend : {
      width : '15%' , 
      color : 'white'
    } , 
    email :{
      marginLeft : '30%'
    } ,
    titleText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    imageSize : {
      height :140 , 
      width : 140
    }


  });