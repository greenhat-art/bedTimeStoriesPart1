import React from 'react';
//import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import WriteStoryScreen from './screens/writeScreen'
import ReadStoryScreen from './screens/readScreen'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen
}
  )

const AppContainer = createAppContainer(TabNavigator);

