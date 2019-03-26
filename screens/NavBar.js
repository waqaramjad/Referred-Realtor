import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight ,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Container, Header, Left, Item, Input,Body, Right, Button, Icon, Title ,Thumbnail} from 'native-base';
import styles1 from './styles/style'
import Example from './modal/model'
import { MonoText } from '../components/StyledText';
import Modal from "react-native-modal";

export default class Nav extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {

      loading: true ,
      visibleModal: null,

    }}
    renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );

    renderModalContent = () => (
      <View style={styles.modalContent}>
        <Text>Hello!</Text>
        <Image
            source={require('../assets/images/QRCode.png')}
          />
        {this.renderButton("Close", () => this.setState({ visibleModal: null }))}
      </View>
    );
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
    console.log('this.props')
    console.log(this.props)
    const { navigate  , state} = this.props.navigation; 

    return (
       <View>
        <Header style={styles1.mainNav}>
        {/* <View style={styles.container}> */}
        
        {/* {this.renderButton("Modal that can be closed on backdrop press", () =>
          this.setState({ visibleModal: 6 }),
        )} */}
       
        
        <Modal
          isVisible={this.state.visibleModal === 6}
          onBackdropPress={() => this.setState({ visibleModal: null })}>
          {this.renderModalContent()}
        </Modal>
       
      
      {/* </View> */}
          <Left>

         
            {/* <Thumbnail onPress={()=>{this.props.navigator.push({title: 'Home'})}} source={{ uri: 'https://static1.squarespace.com/static/58c28fabdb29d6fb17c2f40f/t/5a1c1000f9619afa6a6f1325/1511788547840/Foley+circle+thumbnail.png' }}  /> */}
            {/* <View onPress={()=>{ alert('sdf') }}> */}
            <TouchableHighlight onPress={ () =>     navigate("Drawer")
 }>
 {/* <TouchableHighlight onPress={ () =>    alert('sdf') */}
            <Thumbnail  source={{ uri: 'https://static1.squarespace.com/static/58c28fabdb29d6fb17c2f40f/t/5a1c1000f9619afa6a6f1325/1511788547840/Foley+circle+thumbnail.png' }}  />
           </TouchableHighlight>
            {/* </View> */}
                {/* </Left> */}
          </Left>
          <Body>
            <Title>{this.props.ScreenName}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='notifications' />
              <Icon name='share' onPress={()=><Example modalValue={true}/> } />
            </Button>
          </Right>
        </Header>
        <Header searchBar rounded style={{backgroundColor:'white'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            {/* <Icon name="mic" onPress={()=>{return(<Example modalValue={true}/>)}}   /> */}
            <Icon name="mic" onPress={()=>{this.setState({ visibleModal: 6 })}}   />
            {/* <Icon name="mic" onPress={()=>alert('sdf') }  /> */}
          </Item>
         
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </View>
  
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});

 

