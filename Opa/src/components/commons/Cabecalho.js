import React, { Component } from "react";
import { TouchableOpacity, Animated, Text, View } from "react-native";
import estilo from "../../styles/style";
import { OpaInput, OpaBotao, OpaSpinner } from './index'

import * as firebase from 'firebase';
import 'firebase/firestore';


class Cabecalho extends Component {
    constructor() {
        super()
        this.unscribe = null;
        this.ref = firebase.firestore().collection("categorias");

        this.state = {
            loading: true,
            isShown: false,    // variavel que controla a visibilidade do menu de categorias
            altura: new Animated.Value(0),    // valor inicial da altura do menu de categorias
            categorias: [],
            searchBarFocused: false    // variavel que muda de acordo com o focus da barra de pesquisa
        }

    }

    atualizarLista(query) { // metodo enviado para atualizar a lista de restaurantes cadastrados
        let categorias = [];

        query.forEach((doc) => {
            const { nomeCategoria } = doc.data();
            categorias.push({
                key: doc.id,
                nomeCategoria
            })
        });

        this.setState({ categorias, loading: false }) // atualiza o estado do componente
    }


    toSearch() {
        if (!this.state.searchBarFocused) {
            alert('abriu')
            this.setState({ searchBarFocused: true });
            return;
        }

        this.setState({ searchBarFocused: false });
        alert('fechou');

        return
    }

    renderCategorias() {
        if (this.state.loading) {
            return (
                <Animated.View
                    style={estilo.categoriaTrack}
                    height={this.state.altura}
                >
                    <OpaSpinner cor='white' />
                </Animated.View>

            )
        }
        return (
            <Animated.FlatList
                style={estilo.categoriaTrack}
                height={this.state.altura}
                data={this.state.categorias}
                alignItems='center'
                renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ListarRestaurantes', { categoria: item.key })} style={estilo.categoriaCard}>
                        <Text>{item.nomeCategoria}</Text>
                    </TouchableOpacity>
                }
                horizontal={true}
                keyExtractor={(index, item) => index + item} />
        )

    }

    async componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.atualizarLista.bind(this)); // buscando da coleção de categorias
    }

    // mostra as categorias animando a altura do cabeçalho
    showCategoria() {
        if (!this.state.isShown) { // se o cabeçalho estiver fechado ele entra nesse if
            //isshown indica o estado do cabeçalho

            Animated.timing(this.state.altura, {// passa o valor que se quer alterar como o primeiro parametro
                toValue: 40, // novo valor com animação
                duration: 150, // tempo da animação
            }).start()
            
            this.setState({ isShown: true }); // modifica o estado setando que o cabeçalho esta aberto
            return;
        }

        // se ele não entrar no if acima significa que o cabeçalho ja esta aberto
        Animated.timing(this.state.altura, { // executa o cotrario do if acima
            toValue: 0,
            duration: 150
        }).start();

        this.setState({ isShown: false }); // indicando que o cabeçalho esta fechado
    }

    render() {
        return (
            <Animated.View style={estilo.cabecalho}>
                <OpaInput
                    placeholder="Pesquise um restaurante ou comida!"
                    onFocus={() => this.toSearch()}    // esse metodo muda o estado que interage com a animação da barra de pesquisa
                // a props 'onFocus' aciona de acordo com o 'focus' e 'blur'
                />
                {this.renderCategorias(this.state.categorias)}
                <OpaBotao estilo="botaoCategoria" acao={() => this.showCategoria()}>
                    Categorias
                </OpaBotao>
            </Animated.View>
        )
    }
}

export { Cabecalho }