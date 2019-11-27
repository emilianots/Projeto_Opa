import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { OpaBotao, Cabecalho } from '../commons/index';
import estilo from "../../styles/style";


class OpaTelaComanda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: 127.23,
            emAndamento: [],
            recebidos: [],
            carregando: true
        };

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f6f6f6", overflow: "hidden" }}>
                <View style={estilo.cabecalho2}>
                    <Text style={estilo.textTitulo}>Meus Pedidos</Text>
                    <Text style={estilo.textValor}>R${this.state.valor}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={estilo.botaoSecundario}>
                            <Text style={estilo.botaoSecundarioTexto}>Detalhes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={estilo.botaoPrimario}>
                            <Text style={estilo.botaoPrimarioTexto}>Pagar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export { OpaTelaComanda };