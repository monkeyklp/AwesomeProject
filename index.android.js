/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Navigation } from 'react-native-navigation';

import firstScreen from './src/listview'
import secondScreen from './src/props'

import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => firstScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => secondScreen);
}

registerScreens(); // this is where you register all of your app's screens


const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen : 'example.FirstTabScreen',
    title : 'first',
    navigatorButtons: {
      rightButtons: [
        {
          title: 'Edit', // if you want a textual button
          passProps: {}, // Object that will be passed as props to custom components (optional)
          id: 'compose1', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
          testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
          disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
          disableIconTint: false, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
          buttonColor: 'blue', // Set color for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontWeight: '600' // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
        },
      ],
      leftButtons : [
        {
          "id": "back",
        }
      ],
    },
  }
  
  // [
  //   {
  //     label: 'One',
  //     screen: 'example.FirstTabScreen', // this is a registered name for a screen
  //     icon: require('./img/one.png'),
  //     title: 'Screen One'
  //   },
  //   {
  //     label: 'Two',
  //     screen: 'example.SecondTabScreen',
  //     icon: require('./img/two.png'),
  //     title: 'Screen Two'
  //   }
  // ]
});