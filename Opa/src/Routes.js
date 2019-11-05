import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import OpaTelaHome from './components/OpaTelaHome';
import OpaTelaMapa from './components/OpaTelaMapa';




class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: OpaTelaHome,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-home' size={20} />
            )
        }
    },
    Mapa: {
        screen: OpaTelaMapa,
        navigationOptions: {
            tabBarLabel: 'Mapa',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-person' size={20} />
            )
        }
    }
},
    {
        tabBarOptions: {
            activeTintColor: '#ff5c5c',
            inactiveTintColor: 'gray',
            activeBackgroundColor: 'yellow',
            labelStyle: {
                paddingBottom: 10,
                fontWeight: "bold"
            },
        },
    }
);

export default createAppContainer(TabNavigator);