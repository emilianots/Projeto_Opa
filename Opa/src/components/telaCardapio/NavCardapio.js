import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, } from 'react-navigation';


import { Categoria1 } from './Categoria1';


const NavCardapio = createMaterialTopTabNavigator({

    Massas: {
        screen: Categoria1,
        navigationOptions: {
            tabBarLabel: 'Massas'
        }
    },

    Reserva: {
        screen: Categoria1,
        navigationOptions: {
            tabBarLabel: 'Reservar'
        }
    },

    Comanda: {
        screen: Categoria1,
        navigationOptions: {
            tabBarLabel: 'Comanda'
        }
    },
},
    {
        tabBarOptions: {
            activeTintColor: '#ff5c5c',
            inactiveTintColor: 'gray',

            labelStyle: {
                paddingBottom: 5,
                fontSize: 11,
                fontFamily: 'Montserrat-Medium'
            },

            style: {
                paddingTop: 5,
                backgroundColor: '#fff',
            }
        }
    }
);
export default createAppContainer(NavCardapio);