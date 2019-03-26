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
import { Container, Header, Left, Item, Input,Body, Right, Button, Icon, Title ,Thumbnail} from 'native-base';
import styles from './styles/style'

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
    console.log(this.props)
    return (
       <View>
        <Header style={styles.mainNav}>
          <Left>

         
            <Thumbnail source={{ uri: 'https://static1.squarespace.com/static/58c28fabdb29d6fb17c2f40f/t/5a1c1000f9619afa6a6f1325/1511788547840/Foley+circle+thumbnail.png' }} />
                {/* </Left> */}
          </Left>
          <Body>
            <Title>{this.props.ScreenName}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='notifications' />
            </Button>
          </Right>
        </Header>
        <Header searchBar rounded style={{backgroundColor:'white'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="mic" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </View>
  
    );
  }
}


 

