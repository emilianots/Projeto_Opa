
import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import estilo from '../../styles/style';

//icons
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../config-icons.json';
import { SecaoHome, CabecalhoSecao } from '../commons';
OpaIcons = createIconSetFromFontello(fontelloConfig);

class RestauranteReservar extends Component {

    render(nome, id, nota, fotoURL) {
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <View style={estilo.cabecalho2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, marginTop: 20 }}>
                        <Text style={{ margin: 5, color: '#fff', fontSize: 25 }}>Pé de Fava</Text>
                        <Text style={{ margin: 5, color: '#fff', fontSize: 25 }}>|</Text>
                        <Text style={{ margin: 5, color: '#fff' }}>Restaurante e cervejaria</Text>
                    </View>

                    <View style={{ flexDirection: 'row', position: 'absolute', left: 70, top: 70 }}>
                        <OpaIcons style={{ marginRight: 4 }} name='estrela' size={13} color='#fff' />
                        <OpaIcons style={{ marginRight: 4 }} name='estrela' size={13} color='#fff' />
                        <OpaIcons style={{ marginRight: 4 }} name='estrela' size={13} color='#fff' />
                        <OpaIcons style={{ marginRight: 4 }} name='estrela' size={13} color='#fff' />
                        <OpaIcons style={{ marginRight: 4 }} name='estrela' size={13} color='#fff' />
                    </View>

                    <View style={estilo.infoBlock2}>
                        <OpaIcons style={{ margin: 10 }} name='reservar' size={30} color='#ff5c5c' />
                        <Text style={{ margin: 4, color: '#ff5c5c', fontSize: 25 }}>|</Text>
                        <OpaIcons style={{ margin: 10 }} name='relogio' size={30} color='#ff5c5c' />
                        <Text style={{ margin: 4, color: '#ff5c5c', fontSize: 25 }}>|</Text>
                        <OpaIcons style={{ margin: 10 }} name='perfil' size={30} color='#ff5c5c' />
                    </View>

                </View>
                <CabecalhoSecao titulo="Data" />
            </View>
        )
    }
}

export { RestauranteReservar }