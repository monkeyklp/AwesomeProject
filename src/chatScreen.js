import React from 'react';
import {Text, Button} from 'react-native';
import { TabNavigator } from "react-navigation"

class ChatScreen extends React.Component {
    render() {
        const { params } = this.props.navigation.state;
        return  <Text>Chat with {params.user}</Text>
    }
}

class AllChatScreen extends React.Component {
   

    render() {
        const {goBack} = this.props.navigation;
        return <Text>List of all contacts</Text>
    }
}

const ChatScreenNavigator = TabNavigator({
    chat : {screen : ChatScreen},
    allChat : {screen : AllChatScreen}
});

ChatScreenNavigator.navigationOptions = {
    title : 'Chats'
}

export default ChatScreenNavigator;