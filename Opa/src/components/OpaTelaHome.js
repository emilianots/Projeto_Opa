import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Cabecalho, SecaoHome, OpaSpinner } from './commons/index';

import * as firebase from 'firebase';
import 'firebase/firestore';


export default class OpaTelaHome extends Component {

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection("restaurantes")
        this.state = {
            restaurantes: [],
            loading: true
        }
    }

    atualizarLista(query) { // metodo enviado para atializar a lista de restaurantes cadastrados
        let restaurantes = [];

        query.forEach((doc) => {
            const { nome } = doc.data();
            restaurantes.push({
                key: doc.id,
                nome
            })
        });

        this.setState({ restaurantes, loading: false }) // atualiza o estado do componente
    }

    componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.atualizarLista.bind(this)); //o unscribe fica escutando qualquer mudança na coleção 'restaurantes'
    }

    render() {
        if (this.state.loading) { // verifica se a lista não foi carregada
            return (
                <OpaSpinner tamanho={80} />
            )
        }

        //abaixo, chama o componente que renderiza o cabeçalho com a barra de pesquisa
        // e chama tbm o componente responsavel por renderizar a seção de restarantes específicas
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Cabecalho />
                <ScrollView>
                    <SecaoHome titulo="Destaques" destaques={this.state.restaurantes}></SecaoHome>
                    <SecaoHome titulo="Populares" destaques={this.state.restaurantes}></SecaoHome>
                    <SecaoHome titulo="Abertos" destaques={this.state.restaurantes}></SecaoHome>

                </ScrollView>
            </View>
        )
    }
}