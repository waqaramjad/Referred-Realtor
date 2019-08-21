import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Container, Header, Left, Body,Form, Item, Input, Label ,CheckBox, Right,ListItem, Radio,Button, Icon, Title ,  Content, Card, CardItem, Thumbnail,} from 'native-base';
// import Nav from './NavBar'

// import { MonoText } from '../components/StyledText';

export default class SignUp extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {

      loading: true ,
    }}
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("../resource/Roboto.ttf"),
      Roboto_medium: require("../resource/Roboto_medium.ttf"),
      ...Ionicons.font,    });
          this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    const { navigate  , state} = this.props.navigation; 
    console.log(this.props)
    return (
      // <View style={styles.container}>
      <Container >
      {/* <Nav ScreenName ='Activity Feed' ScreenShow={false} /> */}
      {/* <Header /> */}

      <Content>
      <View style={styles.mianView}>
        <Text style={styles.login}>Sign Up</Text>
        <View  style={styles.InterternalView}>

       

        <Form>
            <Item floatingLabel>
              <Label style={styles.textFBandLog}>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.textFBandLog}>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.textFBandLog}>User Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.textFBandLog}>Location</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.textFBandLog}>Year Of Experience</Label>
              <Input />
            </Item>
          </Form>

          
            <Text style={styles.subHeading}>Gender</Text>
          <ListItem selected={true}>
            {/* <Left> */}
            <Radio
                color={"black"}
                selectedColor={"black"}
                style={styles.radio}

                // selected={true}
                />
              <Text>Male</Text>
            {/* </Left> */}
            {/* <Right> */}
            <Radio
                color={"black"}
                selectedColor={"black"}
                style={styles.radio}
                // selected={true}
                />
              <Text>Female</Text>
            {/* </Right> */}
          </ListItem>
          
                <Text style={styles.subHeading}> Type of Raelty</Text>

                <ListItem>
            <CheckBox style={styles.check} />
            <Body>
              <Text>Residential</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox checked={true}  style={styles.check} />
            <Body>
              <Text>Commercial</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox style={styles.check}/>
            <Body>
              <Text >Agriculture</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox checked={true} style={styles.check} />
            <Body>
              <Text > Industrial</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox style={styles.check} />
            <Body>
              <Text >Land</Text>
            </Body>
          </ListItem>
          <View >

          <Card>
            <CardItem header>
              <Text style={styles.subHeading}>Contact</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Item>
            <Icon active name='md-call' />
            <Input placeholder='Call'/>
          </Item>
              <Item>
            <Icon active name='mail' />
            <Input placeholder='Text Message'/>
          </Item>
              <Item>
            <Icon active name='md-mail' />
            <Input placeholder='Email'/>
          </Item>
              </Body>
            </CardItem>
           
         </Card>

         {/* Social Media  */}
          <Card>
            <CardItem header>
              <Text style={styles.subHeading}> Social Media </Text>
            </CardItem>
            <CardItem>
              <Body>
              <Item>
            <Icon active name='logo-facebook' />
            <Input placeholder='Facebook'/>
          </Item>
              <Item>
            <Icon active name='logo-instagram' />
            <Input placeholder='Instagram'/>
          </Item>
              <Item>
            <Icon active name='logo-twitter' />
            <Input placeholder='Twitter'/>
          </Item>
              <Item>
            <Icon active name='logo-whatsapp' />
            <Input placeholder="Whats App"/>
          </Item>
              </Body>
            </CardItem>
           
         </Card>

          <Text style={{justifyContent: "flex-end" , textAlign: 'right' , marginRight : '6%', color :'white'}}>Forget Password</Text>
      <View style={{marginTop : '15%'}} >

          <Button block bordered light style={styles.FbAndLogBtn}>
            <Text style={styles.textForFband}>Sign Up</Text>
          </Button>
          </View>

          <View>
            {/* <View>

            <Text style={{  textAlign: 'center',color :'white' , marginLeft : "20%" ,marginTop : '3%' , marginBottom : '6%'  }} >New User ? Sign Up</Text>
            </View> */}
            {/* <Button block  style={{ backgroundColor : 'white'}} onPress={()=>{navigate("tab")}}>
            <Text style={{color : '#65c296' , backgroundColor : 'white'}}>Facebook</Text>
          </Button> */}
          </View>
       </View>
       </View>
 </View>
      </Content>
    </Container>
 

    );
  }



}

const styles = StyleSheet.create({

  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
login :{
  fontSize :  30, 
  color : 'black'
} , 
forget :{
  
} , 
textFBandLog :{
  color : 'black'
} , 
FbAndLogBtn : {
  backgroundColor : '#65c296' , 
  // border : '1px solid  white'
} ,  
textForFband : {
  color : 'white'
} , 
mianView : {
margin : 22
} , 
InterternalView : {
  // marginTop : '3%'
} , 

subHeading :{
  fontSize : 20,
  marginTop : 7
} , 
radio : {
  marginRight : 7 ,
  marginLeft : 7

} ,
check : {
  marginRight : 30
}

});
