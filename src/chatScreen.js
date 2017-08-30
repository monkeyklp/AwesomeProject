import React from 'react';
import {Text} from 'react-native';
export class ChatScreen extends React.Component {
    // static navigationOptions = {
    //     title : 'chat with me'
    // };

    static navigationOptions = ({navigation}) => 
    ({title : `Chat with ${navigation.state.params.user}`});
    render() {
        const { params } = this.props.navigation.state;
        return  <Text>Chat with {params.user}</Text>
    }
}