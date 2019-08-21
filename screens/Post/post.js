import React, { Component } from "react";
import { Container,Button , Header, Card, CardItem,Content, Text, Textarea, Form } from "native-base";
// import { Button } from "react-native-elements";
import Nav from '../NavBar'
import { Ionicons } from '@expo/vector-icons'

export default class Post extends Component {


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
    
    return (
      <Container>
                <Nav ScreenName ='Post' ScreenShow={false} navigation={this.props.navigation} />

        <Content >
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
                <Button>
                    <Text>Post</Text>
                </Button>
        </Content>
      </Container>
    );
  }
}