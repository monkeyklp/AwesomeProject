import {HomeScreen} from './homeScreen'
import ChatScreen from './chatScreen'
import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator({
    Home: {
        screen:HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: 'inof',
        }), },
    Chat: {screen:ChatScreen}
});

export default SimpleApp;