import React, { Component } from "react";
import { TouchableOpacity, Animated, Image } from "react-native";
import estilo from "../../styles/style";
import { OpaInput, OpaBotao } from './index'


class Cabecalho extends Component {
    constructor() {
        super()
        this.state = {
            isShown: false,
            altura: new Animated.Value(0),
            categorias: ['Pítça', 'Amburgui', 'Çalgado', 'Assaí', 'Zalada', 'Sanduicheicheihce', 'Pitzza', 'Comida de baiano', 'Comida']
        }
    }

    renderCategorias() {
        return (
            <Animated.FlatList
                style={estilo.categoriaTrack}
                height={this.state.altura}
                data={this.state.categorias}
                alignItems='center'
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListarRestaurantes', {categoria: item})} style={estilo.categoriaCard}>
                        <Image resizeMethod='scale' style={estilo.categoriaImg} source={require('../../../assets/images/pizza.jpeg')}/>
                    </TouchableOpacity>
                }
                horizontal={true}
                keyExtrator={(index, item) => index + item} />
        )

    }

    // mostra as categorias animando a altura do cabeçalho
    showCategoria() {
        if (!this.state.isShown) { // se o cabeçalho estiver fechado ele entra nesse if
            //isshown indica o estado do cabeçalho
            Animated.timing(this.state.altura, {// passa o valor que se quer alterar como o primeiro parametro
                toValue: 140, // novo valor com animação
                duration: 150, // tempo da animação
            }).start()
            this.setState({ isShown: true }); // modifica o estado setando que o cabeçalho esta aberto
            return;
        }

        // se ele não etrear no if acima significa que o cabeçalho ja esta abert
        Animated.timing(this.state.altura, { // executa o cotrario do if acima
            toValue: 0,
            duration: 150
        }).start();

        this.setState({ isShown: false }); // indicando que o cabeçalho esta fechado
    }

    render() {
        return (
            <Animated.View style={estilo.cabecalho}>
                <OpaInput placeholder="Pesquise seu restaurante favorito!" />
                {this.renderCategorias(this.state.categorias)}
                <OpaBotao estilo="categoria" acao={() => this.showCategoria()}>
                    Categorias
                </OpaBotao>
            </Animated.View>
        )
    }
}

export { Cabecalho }