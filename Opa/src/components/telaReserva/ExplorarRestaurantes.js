
import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import estilo from '../../styles/style';
import { thisExpression } from '@babel/types';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { Cabecalho2 } from '../commons/Cabecalho2';
import { OpaSpinner } from '../commons';
import { Restaurante } from './Restaurante';

class ExplorarRestaurantes extends Component {

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection("restaurantes")
        this.state = {
            restaurantes: [],
            loading: true
        }
    }

    atualizarLista(query) { // metodo enviado para atualizar a lista de restaurantes cadastrados
        let restaurantes = [];

        query.forEach((doc) => {
            const { nome, nota, fotoURL } = doc.data();
            restaurantes.push({
                key: doc.id,
                nome,
                nota,
                fotoURL,
            })
        });

        this.setState({ restaurantes, loading: false }) // atualiza o estado do componente
    }

    async componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.atualizarLista.bind(this)); //o unscribe fica escutando qualquer mudança na coleção 'restaurantes'
        try {
            const valor = await AsyncStorage.getItem('item');
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
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5' }}>
                <Cabecalho2></Cabecalho2>
                    {/* 
                        Abaixo foi passada a propriedade navigation para poder ser realizada a navegação pelos componentes filhos
                    */}
                    <View style={{ marginBottom: 20 }}>
                        <Restaurante navigation={this.props.navigation} lista={this.state.restaurantes} />
                    </View>
            </View>
        )
    }
}
export { ExplorarRestaurantes }