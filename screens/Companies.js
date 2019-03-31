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

var ContactData = [
  
  { name :  'Alia gerge ', 
  profileImage : 'data:image/jpeg;base64,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'
  } , 
  { name :  ' Alina erue', 
  profileImage : 'data:image/jpeg;base64,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'
  } , 
  { name :  ' Bika erter', 
  profileImage : 'data:image/jpeg;base64,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'
  } , 
  { name :  ' Benh wieugr', 
  profileImage : 'data:image/jpeg;base64,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'
  } , 
  { name :  ' Chomin laiugs', 
  profileImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRset7ggzy2wxT9gtDlbd7FdgWo37_D26M9eQA-khrnfj8iP173  '
  } , 
  { name :  ' Cishg layda', 
  profileImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hvj1fPPWA8KtrOE5UOa3WmgyGl1NQd1puM8_dh-bAFVjiUYOBw'
  } , 
  { name :  ' Dany qiwug', 
  profileImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPob7kcHmsSEhPru-d5yZigBFFK1BXtVd60tR-HRZTSEgrjcv'
  } , 
]
export default class Companies  extends React.Component {
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
      <Nav ScreenName ='Locate' ScreenShow={true} navigation={this.props.navigation}/>
      {/* <Header /> */}
      <Content>

          <Card>
              <CardItem>
                  <Left/>
<Body>

{/* <Thumbnail source={{ uri: 'https://static1.squarespace.com/static/58c28fabdb29d6fb17c2f40f/t/5a1c1000f9619afa6a6f1325/1511788547840/Foley+circle+thumbnail.png' }} style={{height: 180, width: 180 , marginLeft:'-40%'}} /> */}
 <Thumbnail source={{ uri: 'https://www.emblemetric.com/wp-content/uploads/2013/05/pgnew.jpg' }} style={{height: 180, width: 180 , marginLeft:'-40%'}} />

</Body>
                  <Right/>

              </CardItem>
              <CardItem >
                <View>
<Text style={styles.NameLabel}> 

P & G Builders
</Text>
                </View>

              </CardItem>
          </Card>
          
      <List>
      <ListItem itemDivider>
              <Text>Members</Text>
            </ListItem>

            {
              ContactData.map(data =>{
console.log(data)
var imgaeURL= data.profileImage
               return(
                <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: imgaeURL }} />
                </Left>
                <Body>
                  <Text>{data.name}</Text>
                </Body>
              </ListItem>
               )
              }
                
                
              
              
              )
            }
            
          </List>
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
  NameLabel : {
    fontSize: 30,
    textAlign: 'center' , 
    marginLeft :'30%'
  }
});
