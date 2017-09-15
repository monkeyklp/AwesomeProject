/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Navigation } from 'react-native-navigation';

import firstScreen from './src/listview'
import secondScreen from './src/props'

function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => firstScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => secondScreen);
}

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/one.png'),
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/two.png'),
      title: 'Screen Two'
    }
  ]
});