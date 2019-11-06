import React, { Component } from "react";
import { View, Text } from "react-native";
import estilo from "../../styles/style";
import { OpaInput } from './index'


class Cabecalho extends Component {

    render() {
        return (
            <View style={estilo.cabecalho}>
                <Text style={estilo.cabecalhoTexto}>
                    {this.props.titulo}
                </Text>
                <OpaInput placeholder="Pesquise seu restaurante favorito!"/>
            </View>
        )
    }
}

export { Cabecalho }