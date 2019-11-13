import React, { Component } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import estilo from "../../styles/style";
import { OpaInput, OpaBotao } from './index'


class Cabecalho extends Component {
    constructor() {
        super()
        this.state = {
            isShown: false,
            altura: new Animated.Value(100)
        }
    }


    // mostra as categorias animando a altura do cabeçalho
    showCategoria() {
        if (!this.state.isShown) { // se o cabeçalho estiver fechado ele entra nesse if
            //isshown indica o estado do cabeçalho
            Animated.timing(this.state.altura, {// passa o valor que se quer alterar como o primeiro parametro
                toValue: 250, // novo valor com animação
                duration: 150, // tempo da animação
            }).start()
            this.setState({ isShown: true }); // modifica o estado setando que o cabeçalho esta aberto
            return;
        }

        // se ele não etrear no if acima significa que o cabeçalho ja esta aberto
        Animated.timing(this.state.altura, { // executa o cotrario do if acima
            toValue: 100,
            duration: 150
        }).start();

        this.setState({ isShown: false }); // indicando que o cabeçalho esta fechado
    }

    render() {
        return (
            <Animated.View style={estilo.cabecalho} height={this.state.altura}>
                <Text style={estilo.cabecalhoTexto}>
                    {this.props.titulo}
                </Text>
                <OpaInput placeholder="Pesquise seu restaurante favorito!" />
                <OpaBotao estilo="categoria">
                    Categorias
                </OpaBotao>
            </Animated.View>
        )
    }
}

export { Cabecalho }