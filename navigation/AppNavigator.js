  import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {createStackNavigator ,createDrawerNavigator , DrawerNavigator  } from 'react-navigation';
import SignIn from '../screens/signIn/signIn'
import Profile from '../screens/profile/profile'
import Nav from '../screens/NavBar'
import Example from '../screens/modal/model'
import SignUp from '../screens/SignUp/SignUp'
import Sidebar from '../screens/Drwaer/drawer'
import Edit from '../screens/edit/edit'
import Post from '../screens/Post/post'
import ChatMessages from '../screens/ChatMessages' 
const MyDrawerNavigator = createDrawerNavigator(
	{
		Sidebar : { screen: Sidebar  },
	},
	{
		initialRouteName: "Sidebar",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = createStackNavigator({
  SignIn: {screen: SignIn},
  SignUp : {screen : SignUp},
  tab : {screen : MainTabNavigator , navigationOptions :({
    header : null
  })} , 
  ChatMessages : {screen : ChatMessages},
  Profile : {screen : Profile},
  Post : {screen :Post },
  Edit : {screen : Edit},
  Example : {screen : Example},
  Nav : {screen : Nav},
  Drawer : {screen : MyDrawerNavigator},
  
 
});

App.navigationOptions = {
  header : null
}
export default createAppContainer(App);