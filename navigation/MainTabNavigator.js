import React from 'react';
import { Platform , Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LocateScreen from '../screens/Locate';
import CompnayScreen from '../screens/Companies';
import ChatScreen from '../screens/Chat'
import Nav from '../screens/NavBar'

// import Icon from ''
import { Container, Header,Icon ,  Left, Body,Form, Item, Input, Label , Right, Button, Title ,  Content, Card, CardItem, Thumbnail,} from 'native-base';

navigationOptions = {
  header : null
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
 
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 33, height: 33 }} 
    source={require('../assets/bottomBarIcons/hamburg.png')} />
  ),
};
const LocateStack = createStackNavigator({
  Locate: LocateScreen,
});

LocateStack.navigationOptions = {
 
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 33, height: 33 }} 
    source={require('../assets/bottomBarIcons/locate.jpeg')} />
  ),
};
const CompnayStack = createStackNavigator({
  Compnay: CompnayScreen,
});

CompnayStack.navigationOptions = {
 
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 33, height: 33 }} 
    source={require('../assets/bottomBarIcons/location.png')} />
  ),
};

const ChatStack = createStackNavigator({
  Chat: ChatScreen,
});

ChatStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 33, height: 33 }} 
    source={require('../assets/bottomBarIcons/messge.png')} />
    // <Icon active name="hamburger" />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 33, height: 33 }} 
    source={require('../assets/bottomBarIcons/cntct.png')} />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CompnayStack ,
  SettingsStack,
  ChatStack,

}
, {
  tabBarOptions: {
    showLabel: false  , 
    style: {
      
      height: 50, 
      // backgroundColor : '#65c296'
  },
  }});
    