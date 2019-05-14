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
  Profile : {screen : Profile},
  SignIn: {screen: SignIn},
  Edit : {screen : Edit},
  tab : {screen : MainTabNavigator , navigationOptions :({
    header : null
  })} , 
  Example : {screen : Example},
  Nav : {screen : Nav},
    SignUp : {screen : SignUp},
  Drawer : {screen : MyDrawerNavigator},

 
});

App.navigationOptions = {
  header : null
}
export default createAppContainer(App);