import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { OpaBotao, CabecalhoRestaurante, OpaSpinner } from '../commons/index';

import NavCardapio from './NavCardapio';

import {ProdutosCardapio} from './ProdutosCardapio';

import * as firebase from 'firebase';
import 'firebase/firestore';


class OpaTelaCardapio extends Component {

    constructor(props) {
        super(props);
        this.idEstabelecimento = this.props.navigation.getParam('id', null);
        this.state = {
            loading: false,
            estabelecimento: null,
            idEstabelecimento: this.idEstabelecimento
        }
    }

    renderCorpo() {
        let id = this.props.navigation.getParam('id', null);
        return (
            <View>
                <ProdutosCardapio/>
             </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <CabecalhoRestaurante />
                {this.renderCorpo()}
            </View>
        )
    }
}

export { OpaTelaCardapio };