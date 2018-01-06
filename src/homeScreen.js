import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'blue',
      marginRight : 10,
    },
  });

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title : 'welcome',
        headerRight : (<Text style={styles.red} >info</Text>)
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


