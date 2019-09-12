import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, ImageBackground,Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
import { Tooltip } from 'react-native-elements';
import {  Item, Input ,  Accordion , Container, Header,  Icon , Content, Card, CardItem,Right,Thumbnail ,  Left ,  Title ,   Button ,  Body } from "native-base";
import Estar from '../../assets/images/starEmpty.png'
import Fstar from '../../assets/images/starFilled.png'
import Expo from "expo";
import gstyles from '../styles/style'
import { Ionicons } from '@expo/vector-icons'
// import { stat } from 'fs';
// import console = require('console');

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
    showSoundImg: true , 
    ProfileData : ''
    };

    const { state, navigate } = this.props.navigation;
// console.log('state.params',state.params.ProfilData)

    // myUId = state.params.UserId
    myThis = this
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("../resource/Roboto.ttf"),
      Roboto_medium: require("../resource/Roboto_medium.ttf"),
      ...Ionicons.font,    }); 
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
  
  // update(){

  // }
    render() {
  

      const { navigate, state } = this.props.navigation; 
      var ProfileData = state.params.ProfileData
      console.log('ProfileData',ProfileData)
//       var ProfileData = {
//         Uname : 'sd' ,
//       name : 'asd',
//       LName : 'asd ', 
//      YearOfExperience : '7',
//      Gender : 'das',
// 			email:'dr', 
//       password:'ert'	, 
//       cnfrmPass :'ret',
// Location : 'ert',

//     call  : 'ert'   ,
//     mail   :   'ert' ,
//     Facebook  :    'ert',
//     Instagram  :    'ert',
//     Twitter   : 'erter' , 
//     Whats  : '' , 
    
//     avatar : 'https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png', 
      
//       }
      console.log('this.props', this.props)
      console.log('this.props 2')
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
          <Button transparent  onPress={()=>{navigate("Edit", {ProfileData:ProfileData})}} >
             <Text style={{color:'white',fontSize:15 }}>Edit</Text>
            </Button>
            <Tooltip popover={<Text>Flag as inappropriate</Text>}
             style={{backgroundColor : null}} withOverlay={false} withPointer ={false} containerStyle={null}
             
           >
           
  {/* <Text>Press me</Text> */}
  <Icon name="flag" style={{color:'white'}} />
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
              <ImageBackground source={{
                uri:
                // 'https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png' }} style={{height: 200, width: null, flex: 1}}>
                ProfileData.ProfileLink }} style={{height: 200, width: null, flex: 1}}>
              <Image style = {styles.logo} source = {{uri:ProfileData.CompanyLink}} />
 
              
              </ImageBackground>
            </CardItem>


         {/* <CardItem footer>
         <Left/>
         <Body/>
         <Right>
         <Button transparent light>
            <Text>Change Picture </Text>
          </Button>
          </Right>
         </CardItem> */}
      </Card>
     
         <Card >
         <CardItem header>
            {/* <Left/> */}
            {/* <Body style={styles.centerContent}> */}
            {/* <Text style ={styles.titleText}> Bio </Text> */}
            {/* </Body> */}
            </CardItem>
            <CardItem  >
              <Body style={styles.centerContent}>
                <Text style={{fontSize : 30}}> {ProfileData.name} </Text>
                <Text> {ProfileData.Location} </Text>
                <Text> Software Developer</Text>
                <Text> {ProfileData.YearOfExperience} year experience  </Text>
                  {/* <Text> Billing info  : {this.state.billINfo} </Text> */}
                {/* <Text> Credit Card No :{this.state.CardNo}   </Text> */}
                {/* <Text> Company Name  : MS    </Text>
                <Text> Snapchat username  :  Senita345   </Text>
                <Text> Skype username  :  Senita345   </Text> */}
                {/* <Text> Skype username  :  Senita345   </Text> */}
              </Body>
            </CardItem>
           
         </Card>
         {/* <Card > */}
         <Card>
           <CardItem style={{marginLeft : '30%'}}>


           <Icon active name='logo-facebook' />
           <Icon active name='logo-instagram' />
           <Icon active name='logo-twitter' />
           <Icon active name='logo-whatsapp' />

           </CardItem>
<CardItem>
<Left>

           <TouchableOpacity
           
            onPress={ () => this.setState({ showSoundImg: !this.state.showSoundImg }) } 
          >
            {this.renderImage()}
          </TouchableOpacity>
</Left>
<Right>
   
                <Text> {ProfileData.name}  </Text>
                <Text> Software Developer  </Text> 
</Right>
</CardItem>

           <CardItem>
             {/* <Item> */}
             <Button    style={styles.bottomButtonGap}>
            <Text style={styles.btnText}>Chat </Text>
          </Button>
             <Button   info  style={styles.bottomButtonGap}>
            <Text style={styles.btnText}>Notes </Text>
          </Button>
             <Button    info  style={{  backgroundColor : '#65c296' , 
}}>
            <Text style={styles.btnText}>Share</Text>
          </Button>

             {/* </Item> */}
           </CardItem>
         </Card>
         
           
           
           
          
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
        width: 100,
        height: 100 ,
        marginTop : '25%', 
        marginLeft  : '70%'

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
        marginRight: '10%', 
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
      } , 
      btnText : { 
        marginLeft : 30 , 
        marginRight : 30
      }

  });