import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {createStackNavigator  } from 'react-navigation';
import SignIn from '../screens/signIn/signIn'


const App = createStackNavigator({
  SignIn: {screen: SignIn},
  tab : {screen : MainTabNavigator , navigationOptions :({
    header : null
  })}
 
 //  Login: {screen: Login},
});

App.navigationOptions = {
  header : null
}
export default createAppContainer(App);