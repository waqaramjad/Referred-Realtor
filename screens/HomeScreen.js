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
import { Container, Header, Left, Body, Right, Button, Icon, Title ,  Content, Card, CardItem, Thumbnail,} from 'native-base';
import Nav from './NavBar'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
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
      // <View style={styles.container}>
      <Container>
      <Nav/>
      {/* <Header /> */}
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'data:image/png;base64,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'}} />
              <Body>
                <Text>Alia</Text>
                <Text note>User</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'data:image/png;base64,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'}} />
              <Body>
                <Text>Alia</Text>
                <Text note>User</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
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
