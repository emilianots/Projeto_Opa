import React, { Component } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
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
        header: null, // setar o header do navegation como nulo
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

    async componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.atualizarLista.bind(this)); //o unscribe fica escutando qualquer mudança na coleção 'restaurantes'
        try {
            const valor = await AsyncStorage.getItem('item');
            console.log(valor + ' eeeeeee');
        } catch (e) {
            console.log(e);
        }
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
                <Cabecalho navigation={this.props.navigation} />
                <ScrollView>
                    {/* 
                        Abaixo foi passada a propriedade navigation para poder ser realizada a navegação pelos componentes filhos
                    */}
                    <View style={{ marginBottom: 20 }}>
                        <CabecalhoSecao titulo="Destaques" />
                        <CorpoSecao navigation={this.props.navigation} lista={this.state.restaurantes} />
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <CabecalhoSecao titulo="Recomendados" />
                        <CorpoSecao navigation={this.props.navigation} lista={this.state.restaurantes} />
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <CabecalhoSecao titulo="Perto de você" />
                        <CorpoSecao navigation={this.props.navigation} lista={this.state.restaurantes} />
                    </View>

                    {/* <View style={{marginBottom: 20}}>
                        <CabecalhoSecao titulo="Os cinco melhores" />
                        <TelaListarRestaurante resultado={this.state.restaurantes.sort((a, b) => {
                            if (a.nota > b.nota) return -1;
                            if (b.nota > a.nota) return 1;
                            return 0;
                        }
                        ).slice(0, 4)}
                        />
                    </View> */}
                </ScrollView>
            </View>
        )
    }
}

export { OpaTelaHome };