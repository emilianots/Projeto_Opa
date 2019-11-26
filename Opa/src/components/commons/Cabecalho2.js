import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { OpaBotao, Cabecalho, OpaInput } from '../commons/index';
import estilo from "../../styles/style";


class Cabecalho2 extends Component {

    render() {
        return (
            <View style={estilo.cabecalho}>
                <Text style={{ color: '#fff', margin: 10, fontWeight: "bold", fontSize: 16 }}>Para reservar uma mesa, escolha um local</Text>
                <OpaInput placeholder="Nome do restaurante..." />
            </View>
        )

    }
};
export { Cabecalho2 }