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
       
        // let saida = this.ref.where('nomeCategoria' , '==', 'bebidas').get()
        // .then( snapshot =>{
        //     snapshot.forEach(doc =>{
        //         console.log(doc.data())
        //     })
        // });
    }

    showCategoria() {
        if (!this.state.isShown) {
            Animated.timing(this.state.altura, {
                toValue: 40, 
                duration: 150,
            }).start()

            this.setState({ isShown: true });
            return;
        }
        Animated.timing(this.state.altura, { 
            toValue: 0,
            duration: 150
        }).start();

        this.setState({ isShown: false }); 
    }

    render() {
        return (
            <Animated.View style={estilo.cabecalho}>
                <OpaInput
                    placeholder="Pesquise um restaurante ou comida!"
                    onFocus={() => this.toSearch()}
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