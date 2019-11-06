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
            const { nome, nota } = doc.data();
            restaurantes.push({
                key: doc.id,
                nome,
                nota
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
                    {/* 
                        Abaixo foi passada a propriedade navigation para poder ser realizada a navegação pelos componentes filhos
                    */}
                    <SecaoHome navigation={this.props.navigation} titulo="Destaques" destaques={this.state.restaurantes}></SecaoHome>
                    <SecaoHome navigation={this.props.navigation} titulo="Populares" destaques={this.state.restaurantes}></SecaoHome>
                    <SecaoHome navigation={this.props.navigation} titulo="Abertos" destaques={this.state.restaurantes}></SecaoHome>

                </ScrollView>
            </View>
        )
    }
}