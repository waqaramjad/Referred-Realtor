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

// const MyDrawerNavigator = createDrawerNavigator({
//   SignIn: {
//     screen: SignIn,
//   },
//   Profile: {
//     screen: Profile,
//   },
// });

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
  tab : {screen : MainTabNavigator , navigationOptions :({
    header : null
  })} , 
  Example : {screen : Example},
  Nav : {screen : Nav},
  Profile : {screen : Profile},
  SignIn: {screen: SignIn},
    SignUp : {screen : SignUp},
  Drawer : {screen : MyDrawerNavigator},

 
 //  Login: {screen: Login},
});

App.navigationOptions = {
  header : null
}
export default createAppContainer(App);