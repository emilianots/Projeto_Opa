import React from 'react';
import { Platform } from "react-native";
import { Text, View, Image } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

//icons
import {createIconSetFromFontello} from 'react-native-vector-icons'; 
import fontelloConfig from './config.json'; 
OpaIcons = createIconSetFromFontello (fontelloConfig); 


import {
    //Telas principais do app
    OpaTelaHome,
    OpaTelaReserva,
    OpaTelaQrcode,
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
            tabBarIcon: ({ tintColor, focused }) => (
                <OpaIcons name={focused ? 'home-a' : 'home'} size={22} color={tintColor}/>

              )
        }
    },

    Reserva: {
        screen: OpaTelaReserva,
        navigationOptions: {
            tabBarLabel: 'Reserva',
            tabBarIcon: ({ tintColor, focused }) => (
                <OpaIcons name={focused ? 'reservar-a' : 'reservar'} size={22} color={tintColor}/>

              )
        }
    },

    Qrcode: {
        screen: OpaTelaQrcode,
        navigationOptions: {
            tabBarLabel: ' ',
            
            tabBarIcon: (
                <View style={{backgroundColor: '#ff5c5c', width: 60, height: 60, borderRadius: 100, alignItems: 'center',
                justifyContent: 'center', position: "absolute", top: -20}}><OpaIcons name='qr-code' size={35} color="white" /></View>
            )
        }
    },

    Comanda: {
        screen: OpaTelaComanda,
        navigationOptions: {
            tabBarLabel: 'Comanda',
            tabBarIcon: ({ tintColor, focused }) => (
                <OpaIcons name={focused ? 'comanda-a' : 'comanda'} size={22} color={tintColor}/>

              )
        }
    },
    Perfil: {
        screen: OpaTelaPerfil,
        navigationOptions: {
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ tintColor, focused }) => (
                <OpaIcons name={focused ? 'perfil-a' : 'perfil'} size={22} color={tintColor}/>
              )
        }
    },
},
    {
        tabBarOptions: {
            activeTintColor: '#ff5c5c',
            inactiveTintColor: 'gray',
            iconStyle:{
                paddingTop: 10
            },

            tabStyle:{
                paddingTop: 5,
            },

            labelStyle: {
                paddingBottom: 5,
                fontSize: 11,
                fontFamily: 'Montserrat-Medium'
            },
        },
    }
);

export default createAppContainer(TabNavigator);