import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Cabecalho, SecaoHome, OpaSpinner, CabecalhoSecao, CorpoSecao } from '../commons/index';
import TelaListarRestaurante from './TelaListartRestaurante'

import * as firebase from 'firebase';
import 'firebase/firestore';


class OpaTelaHome extends Component {

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection("restaurantes")
        this.state = {
            restaurantes: [],
            loading: true
        }
    }

    static navigationOptions = {
        title: "Bem Vindo ao Opa!",
        headerStyle: {
            backgroundColor: '#ff5c5c',
        },
        headerLayoutPreset: 'center'
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
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#eee' }}>
                <Cabecalho />
                {/* <ScrollView> */}
                {/* 
                        Abaixo foi passada a propriedade navigation para poder ser realizada a navegação pelos componentes filhos
                    */}
                {/* <View>
                        <CabecalhoSecao titulo="Destaques" />
                        <CorpoSecao navigation={this.props.navigation} lista={this.state.restaurantes} />
                    </View>

                    <View>
                        <CabecalhoSecao titulo="Recomendados" />
                        <CorpoSecao navigation={this.props.navigation} lista={this.state.restaurantes} />
                    </View>

                    <View>
                        <CabecalhoSecao titulo="Perto de você" />
                        <CorpoSecao navigation={this.props.navigation} lista={this.state.restaurantes} />
                    </View>

                </ScrollView> */}
                <TelaListarRestaurante resultado={this.state.restaurantes} />
            </View>
        )
    }
}

export { OpaTelaHome };