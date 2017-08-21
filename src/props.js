import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
class Greeting extends Component {
    render(){
      return(
        <Text>hello {this.props.name}</Text>
      );
    }
  }
  
  class loastGreetind extends Component {
    render() {
      return(
        <View>
          <Greeting name="I"></Greeting>
          <Greeting name="L"></Greeting>
          <Greeting name="O"></Greeting>
          <Greeting name="V"></Greeting>
          <Greeting name="E"></Greeting>
        </View>
      );
    }
  }

  export default loastGreetind;