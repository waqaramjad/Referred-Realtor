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
import { Container, Header, Left, Body, Right, Button, Icon, Title , List, ListItem, Content, Card, CardItem, Thumbnail,} from 'native-base';
import Nav from './NavBar'

import { MonoText } from '../components/StyledText';

export default class SettingScreen extends React.Component {
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
    return (
      <Container>
      <Nav ScreenName ='CONTACTS' ScreenShow={true}/>
      <Content>

        <Card> 
        <CardItem >

<Text style={{marginRight : '5%'}}>A</Text>

 <Body>
           
            <ListItem avatar>

              <Left>
                <Thumbnail source={{ uri: 'https://static1.squarespace.com/static/58c28fabdb29d6fb17c2f40f/t/5a1c1000f9619afa6a6f1325/1511788547840/Foley+circle+thumbnail.png' }} />
              </Left>
            <View >
              <Body >
                <Text style={{marginTop:'25%'}}>Kumar Pratik</Text>
                
              </Body>
            </View>
             
            </ListItem>
            <ListItem avatar>

              <Left>
                <Thumbnail source={{ uri: 'https://static1.squarespace.com/static/58c28fabdb29d6fb17c2f40f/t/5a1c1000f9619afa6a6f1325/1511788547840/Foley+circle+thumbnail.png' }} />
              </Left>
            <View>
              <Body>
                <Text style={{marginTop:'25%'}}>Kumar Pratik</Text>
                
              </Body>
            </View>
             
            </ListItem>
            
 </Body>
        </CardItem>
        <CardItem >

<Text style={{marginRight : '5%'}}>A</Text>

<Body>
 
  <ListItem avatar>

    <Left>
      <Thumbnail source={{ uri: 'https://static1.squarespace.com/static/58c28fabdb29d6fb17c2f40f/t/5a1c1000f9619afa6a6f1325/1511788547840/Foley+circle+thumbnail.png' }} />
    </Left>
  <View >
    <Body >
      <Text style={{marginTop:'25%'}}>Kumar Pratik</Text>
      
    </Body>
  </View>
   
  </ListItem>
  <ListItem avatar>

    <Left>
      <Thumbnail source={{ uri: 'https://static1.squarespace.com/static/58c28fabdb29d6fb17c2f40f/t/5a1c1000f9619afa6a6f1325/1511788547840/Foley+circle+thumbnail.png' }} />
    </Left>
  <View>
    <Body>
      <Text style={{marginTop:'25%'}}>Kumar Pratik</Text>
      
    </Body>
  </View>
   
  </ListItem>
</Body>
</CardItem>

        </Card>
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
});
