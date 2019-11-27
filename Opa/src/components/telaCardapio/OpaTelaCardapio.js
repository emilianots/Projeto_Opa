import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { OpaBotao, CabecalhoRestaurante, OpaSpinner } from '../commons/index';

import NavCardapio from './NavCardapio';

import { ProdutosCardapio } from './ProdutosCardapio';

import * as firebase from 'firebase';
import 'firebase/firestore';


class OpaTelaCardapio extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('restaurantes');
        this.idEstabelecimento = this.props.navigation.getParam('id', null);
        this.state = {
            loading: true,
            estabelecimento: null,
            idEstabelecimento: this.idEstabelecimento
        }
    }

    getRestaurante() {
        console.log(this.state);

        let retorno = this.ref.where('id', '==', "1").get()
            .then(snapshot => {
                console.log(snapshot.empty)
                if (snapshot.empty) {
                    console.log(sna)
                    return;
                }
                snapshot.forEach(doc => {
                    console.log(doc.data());
                })
            })

    }

    // componentDidMount() {
    //     if(this.state.loading){
    //         this.getRestaurante()
    //         console.log('get res')

    //     }
    // }

    renderCorpo() {
        let id = this.props.navigation.getParam('id', null);
        return (
            <View>
                <ProdutosCardapio />
            </View>
        )
    }

    render() {
        //console.log(this.props.navigation.getParam('id'))
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f6f6f6' }}>
                <CabecalhoRestaurante />
                {this.renderCorpo()}
            </View>
        )
    }
}

export { OpaTelaCardapio };

