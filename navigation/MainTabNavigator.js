import React from 'react';
import { Platform , Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LocateScreen from '../screens/Locate';
import CompnayScreen from '../screens/Companies';

navigationOptions = {
  header : null
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
 
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 50, height: 50 }} 
    source={require('../assets/bottomBarIcons/activity.jpeg')} />
  ),
};
const LocateStack = createStackNavigator({
  Locate: LocateScreen,
});

LocateStack.navigationOptions = {
 
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 50, height: 50 }} 
    source={require('../assets/bottomBarIcons/locate.jpeg')} />
  ),
};
const CompnayStack = createStackNavigator({
  Compnay: CompnayScreen,
});

CompnayStack.navigationOptions = {
 
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 50, height: 50 }} 
    source={require('../assets/bottomBarIcons/locate.jpeg')} />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 50, height: 50 }} 
    source={require('../assets/bottomBarIcons/message.jpeg')} />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image style={{ width: 50, height: 50 }} 
    source={require('../assets/bottomBarIcons/contact.jpeg')} />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CompnayStack ,
  SettingsStack,
  LinksStack,

}
, {
  tabBarOptions: {
    showLabel: false  , 
    style: {
      
      height: 50,
  },
  }});
