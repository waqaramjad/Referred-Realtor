import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, ImageBackground,Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import { Tooltip } from 'react-native-elements';
// import firebase from 'firebase';
// import { Navigator } from 'react-native-deprecated-custom-components'
// import {Actions} from "react-native-router-flux";
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
// import Stars from ' react-native-stars';
import Estar from '../../assets/images/starEmpty.png'
import Fstar from '../../assets/images/starFilled.png'
import Expo from "expo";
import gstyles from '../styles/style'
var myUId = ''


export default class Profile extends Component { 
  static navigationOptions = {
    header : null
  }
  constructor(props) {
    // firebase.database().ref('users/'+myUId+'/'  ).update(FormData)
    // .then(() => {
    // })
    super(props);
    this.state = {
    loading: true , 
    Fname : '',
    lName : '', 
    CompName : '' , 

    mail : '',
    pass : '' , 
    cnfrmPassword : '' , 
    
    billINfo : '' , 
    CardNo : '' , 
    showSoundImg: true
    };

    const { state, navigate } = this.props.navigation;

    // myUId = state.params.UserId
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

  renderImage()  {
    var imgSource = this.state.showSoundImg? Estar : Fstar;
    return (
      <Image
      style={styles.favoriteImage} 
        source={ imgSource }
      />
    );
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
          <Button transparent  onPress={()=>{navigate("Edit")}} >
             <Text style={{color:'white',fontSize:15 }}>Edit</Text>
            </Button>
            <Tooltip popover={<Text>Flag as inappropriate</Text>}>
  {/* <Text>Press me</Text> */}
  <Icon name="dots-three-vertical" />
</Tooltip>
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
    
    <CardItem cardBody>
              <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} style={{height: 200, width: null, flex: 1}}>
              <Image style = {styles.logo} source = {{uri:'https://bioprotect.com/wp-content/uploads/2017/10/maya-profile-round.jpg'}} />
 
              
              </ImageBackground>
            </CardItem>


         <CardItem footer>
         <Left/>
         <Body/>
         <Right>
         <Button transparent light>
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
            <CardItem  >
              <Body style={styles.bodyContent}>
                <Text> Name : Senita Zen </Text>
                <Text> Location : Canada  </Text>
                <Text> Experience : 8 years </Text>
                <Text> Email Adress :xyz@gmail.com </Text>
                  {/* <Text> Billing info  : {this.state.billINfo} </Text> */}
                {/* <Text> Credit Card No :{this.state.CardNo}   </Text> */}
                <Text> Company Name  : MS    </Text>
                <Text> Snapchat username  :  Senita345   </Text>
                <Text> Skype username  :  Senita345   </Text>
                {/* <Text> Skype username  :  Senita345   </Text> */}
              </Body>
            </CardItem>
           
         </Card>
         {/* <Card > */}
         <Card>
           <CardItem>

           <Icon active name='logo-facebook' />
           <Icon active name='logo-instagram' />
           <Icon active name='logo-twitter' />
           <Icon active name='logo-whatsapp' />

           </CardItem>

           <TouchableOpacity
           
            onPress={ () => this.setState({ showSoundImg: !this.state.showSoundImg }) } 
          >
            {this.renderImage()}
          </TouchableOpacity>

           <CardItem>
             <Item>
             <Button    style={styles.bottomButtonGap}>
            <Text>Chat </Text>
          </Button>
             <Button   info  style={styles.bottomButtonGap}>
            <Text>Notes </Text>
          </Button>
             <Button    info  style={{  backgroundColor : '#65c296' , 
}}>
            <Text>Share</Text>
          </Button>

             </Item>
           </CardItem>
         </Card>
         
           
           
           
           {/* <CardItem>
             <Body>
             <Item  >
            <Input placeholder='Enter your message here '/>
            <Button  primary block   >
            <Text style={{color:'white'}}>Send</Text>
          </Button>
          </Item>
          <Item >
          <Text style={styles.email}>  abc@gmail.com </Text>
            </Item>


             </Body>
           </CardItem> */}
         {/* </Card> */}
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
    } , 

//  container: {
//         flex: 1,
//         alignItems: 'center',
//       },
      overlay: {
        opacity: 0.5,
        backgroundColor: '#000000'
      },
      logo: {
        // backgroundColor: 'rgba(0,0,0,0)',
        width: 160,
        height: 52 ,
        marginTop : '40%', 
        marginLeft  : '60%'

      },
      backdrop: {
        // flex:1,
        // flexDirection: 'column'
        // width:'75%',
        // height : '75%'
      },
      headline: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
      }, 
      bottomButtonGap : {
        marginRight: '30%', 
        backgroundColor : '#65c296' , 

      },
      image: {
       width: '100%',
       height: '100%',
      },
      cardSection1: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50 / 2,
        zIndex: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 7,
      },
      cardSection2: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 25,
        width: 300,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
      } , 
      favoriteImage : {
        height : 40, 
        width : 40 , 
        marginLeft : 20
      }

  });