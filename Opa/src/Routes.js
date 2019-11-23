import React from 'react';
import { Platform } from "react-native";
import { Text, View, Image } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Istoicons from 'react-native-vector-icons/Fontisto';
import Awesomeicons from 'react-native-vector-icons/FontAwesome';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'



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
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='md-home' size={22} color="gray" />
              )
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
            tabBarLabel: 'Reserva',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='md-list' size={22} color="gray" />
              )
        }
    },

    BotaoDoido: {
        screen: OpaTelaComanda,
        navigationOptions: {
            tabBarLabel: ' ',
            
            tabBarIcon: ({ tintColor }) =>
                <View style={{backgroundColor: '#ff5c5c', width: 60, height: 60, borderRadius: 100, alignItems: 'center',
                justifyContent: 'center', marginBottom: 20}}><Materialicons name='qrcode-scan' size={35} color="white" /></View>
                  
        }
    },

    Comanda: {
        screen: OpaTelaComanda,
        navigationOptions: {
            tabBarLabel: 'Comanda',
            tabBarIcon: ({ tintColor }) => (
                <Istoicons name='file-1' size={22} color="gray" />
              )
        }
    },
    Perfil: {
        screen: OpaTelaPerfil,
        navigationOptions: {
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ tintColor }) => (
                <Awesomeicons name='user-o' size={22} color="gray" />
              )
        }
    }
},
    {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            iconStyle:{
                paddingTop: 10,
            },

            tabStyle:{
                paddingTop: 10,
            },

            labelStyle: {
                fontSize: 11,
                fontFamily: 'Montserrat-Medium'
            },
        },
    }
);

export default createAppContainer(TabNavigator);