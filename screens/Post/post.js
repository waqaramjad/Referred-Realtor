import React, { Component } from "react";
import { Container,Button , Header, Card, CardItem,Content, Text, Textarea, Form } from "native-base";
// import { Button } from "react-native-elements";
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