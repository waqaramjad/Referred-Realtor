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
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


import { MonoText } from '../components/StyledText';

export default class Nav extends React.Component {
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
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      </Container>
  
    );
  }



 

