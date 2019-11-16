import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    //Telas principais do app
    OpaTelaHome,
    OpaTelaMapa,
    OpaTelaComanda,
    OpaTelaCardapio,
    OpaTelaPerfil
} from './components/index';

import {TelaListarRestaurante} from './components/telaHome/TelaListartRestaurante'


const StackHome = createStackNavigator({
    HomeScreen: {
        screen: OpaTelaHome,
    },
    ListarRestaurantes:{
        screen: TelaListarRestaurante
    }
},
    {
        initialRouteName: 'HomeScreen'
    }
)

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: StackHome,
        navigationOptions: {
            tabBarLabel: 'Home',

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
                fontSize: 16,
                fontFamily: 'Montserrat-Medium'
            },
        },
    }
);

export default createAppContainer(TabNavigator);