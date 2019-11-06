import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OpaTelaHome from './components/OpaTelaHome';
import OpaTelaMapa from './components/OpaTelaMapa';
import OpaTelaComanda from './components/OpaTelaComanda';
import OpaTelaCardapio from './components/OpaTelaCardapio';
import OpaTelaPerfil from './components/OpaTelaPerfil';


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: OpaTelaHome,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    // Mapa: {
    //     screen: OpaTelaMapa,
    //     navigationOptions: {
    //         tabBarLabel: 'Mapa'
    //     }
    // },
    Cardapio: {
        screen: OpaTelaCardapio,
        navigationOptions: {
            tabBarLabel: 'Cardápio'
        }
    },
    Comanda: {
        screen: OpaTelaComanda,
        navigationOptions: {
            tabBarLabel: 'Comanda'
        }
    },
    Perfil: {
        screen: OpaTelaPerfil,
        navigationOptions: {
            tabBarLabel: 'Perfil'
        }
    }
},
    {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            labelStyle: {
                paddingBottom: 10,
                fontWeight: "bold",
                fontSize: 16
            },
        },
    }
);

export default createAppContainer(TabNavigator);