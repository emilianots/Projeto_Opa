import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { OpaBotao, Cabecalho, OpaInput } from '../commons/index';
import estilo from "../../styles/style";

class OpaTelaReserva extends Component {

    render() {
        return (
            <View style={estilo.app}>
                <View style={estilo.cabecalho}>
                    <Text style={{color: '#fff', margin: 10, fontWeight: "bold", fontSize: 16}}>Para reservar uma mesa, escolha um local</Text>
                    <OpaInput placeholder="Culinária, nome do restaurante..."/>
                </View>
                <View style={estilo.infoBlock}>
                    <View>
                        <OpaIcons style={{marginRight: 10 }} name='home' size={40} color='#ff5c5c'/>
                    </View>

                    <View>
                        <Text>Sua localização atual</Text>
                        <Text style={{color: '#ff5c5c', fontSize: 22}}>Quixadá, Ceará</Text>
                    </View>
                </View>

                <OpaIcons style={{margin: 80}} name='home' size={150} color='#ff5c5c'/>

                
                
            </View>
        )
    }
};


export { OpaTelaReserva };