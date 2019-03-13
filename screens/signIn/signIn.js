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
import { Container, Header, Left, Body,Form, Item, Input, Label , Right, Button, Icon, Title ,  Content, Card, CardItem, Thumbnail,} from 'native-base';
// import Nav from './NavBar'

// import { MonoText } from '../components/StyledText';

export default class SignIn extends React.Component {
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
        <Text style={styles.login}>Login</Text>

        <Form>
            <Item floatingLabel>
              <Label style={styles.textFBandLog}>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.textFBandLog}>Password</Label>
              <Input />
            </Item>
          </Form>
          
          <View >


          <Text style={{justifyContent: "flex-end" , textAlign: 'right' , marginRight : '6%'}}>Forget Password</Text>
      <View style={{marginTop : '15%'}} >

          <Button block style={styles.FbAndLogBtn}>
            <Text style={styles.textForFband}>Login</Text>
          </Button>
          </View>

          <View>
            <Text >New User ? Sign Up</Text>
            <Button block style={styles.FbAndLogBtn} onPress={()=>{navigate("tab")}}>
            <Text style={styles.textForFband}>Facebook</Text>
          </Button>
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
  fontSize : 25 , 
  color : 'white'
} , 
forget :{
  
} , 
textFBandLog :{
  color : 'white'
} , 
FbAndLogBtn : {
  backgroundColor : 'white'
} ,  
textForFband : {
  color : '#65c296'
}


});
