import React from 'react';
import {Text, Button, View} from 'react-native';
export class HomeScreen extends React.Component {
    static navigationOptions = {
        title : 'welcome'
    };
    render() {
        const {navigate} = this.props.navigation;
        return  (   
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                onPress={() => navigate('Chat', {user:'homeScreen'})}
                title="Chat with Lucy"
                />
          </View>
          );
     
    }
}
