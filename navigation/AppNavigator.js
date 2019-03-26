  import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {createStackNavigator ,createDrawerNavigator } from 'react-navigation';
import SignIn from '../screens/signIn/signIn'
import Profile from '../screens/profile/profile'
import Nav from '../screens/NavBar'
import Example from '../screens/modal/model'

const MyDrawerNavigator = createDrawerNavigator({
  SignIn: {
    screen: SignIn,
  },
  Profile: {
    screen: Profile,
  },
});

const App = createStackNavigator({
  tab : {screen : MainTabNavigator , navigationOptions :({
    header : null
  })} , 
  Example : {screen : Example},
  Nav : {screen : Nav},
  Profile : {screen : Profile},
  SignIn: {screen: SignIn},
  Drawer : {screen : MyDrawerNavigator},

 
 //  Login: {screen: Login},
});

App.navigationOptions = {
  header : null
}
export default createAppContainer(App);