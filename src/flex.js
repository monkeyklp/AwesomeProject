import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems : 'stretch'
      }}>
        <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
export default FlexDirectionBasics;