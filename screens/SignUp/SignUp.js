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
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
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
      <Container style={{backgroundColor : '#65c296'}}>
      {/* <Nav ScreenName ='Activity Feed' ScreenShow={false} /> */}
      {/* <Header /> */}

      <Content>
      <View style={styles.mianView}>
        <Text style={styles.login}>Sign Up</Text>
        <View  style={styles.InterternalView}>

       

        <Form>
            <Item stackedLabel>
              <Label style={styles.textFBandLog}>First Name</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label style={styles.textFBandLog}>Last Name</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label style={styles.textFBandLog}>User Name</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label style={styles.textFBandLog}>Location</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label style={styles.textFBandLog}>Year Of Experience</Label>
              <Input />
            </Item>
          </Form>

          
            <Text>Gender</Text>
          <ListItem selected={true}>
            {/* <Left> */}
            <Radio
                color={"white"}
                selectedColor={"black"}
                // selected={true}
                />
              <Text>Male</Text>
            {/* </Left> */}
            {/* <Right> */}
            <Radio
                color={"white"}
                selectedColor={"black"}
                // selected={true}
                />
              <Text>Female</Text>
            {/* </Right> */}
          </ListItem>
          
                <Text>Type of Raelity</Text>

                <ListItem>
            <CheckBox  />
            <Body>
              <Text>Residential</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Commercial</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox />
            <Body>
              <Text>Agriculture</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Industrial</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox  />
            <Body>
              <Text>Land</Text>
            </Body>
          </ListItem>
          <View >

          <Card>
            <CardItem header>
              <Text>Contact</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Item>
            <Icon active name='home' />
            <Input placeholder='Call'/>
          </Item>
              <Item>
            <Icon active name='home' />
            <Input placeholder='Text Message'/>
          </Item>
              <Item>
            <Icon active name='home' />
            <Input placeholder='Email'/>
          </Item>
              </Body>
            </CardItem>
           
         </Card>

         So
          <Card>
            <CardItem header>
              <Text>Contact</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Item>
            <Icon active name='home' />
            <Input placeholder='Call'/>
          </Item>
              <Item>
            <Icon active name='home' />
            <Input placeholder='Text Message'/>
          </Item>
              <Item>
            <Icon active name='home' />
            <Input placeholder='Email'/>
          </Item>
              </Body>
            </CardItem>
           
         </Card>

          <Text style={{justifyContent: "flex-end" , textAlign: 'right' , marginRight : '6%', color :'white'}}>Forget Password</Text>
      <View style={{marginTop : '15%'}} >

          <Button block bordered light style={styles.FbAndLogBtn}>
            <Text style={styles.textForFband}>Login</Text>
          </Button>
          </View>

          <View>
            <View>

            <Text style={{  textAlign: 'center',color :'white' , marginLeft : "20%" ,marginTop : '3%' , marginBottom : '6%'  }} >New User ? Sign Up</Text>
            </View>
            <Button block  style={{ backgroundColor : 'white'}} onPress={()=>{navigate("tab")}}>
            <Text style={{color : '#65c296' , backgroundColor : 'white'}}>Facebook</Text>
          </Button>
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
  color : 'white'
} , 
forget :{
  
} , 
textFBandLog :{
  color : 'white'
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
}


});
