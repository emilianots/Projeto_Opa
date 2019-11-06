import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {OpaBotao, Cabecalho, OpaSpinner} from './commons/index';

import * as firebase from 'firebase';
import 'firebase/firestore';


export default class OpaTelaCardapio extends Component{

    constructor(props){
        super(props);
        this.idEstabelecimento = this.props.navigation.getParam('id', null);
        this.state ={
            loading: false,
            estabelecimento: null,
            idEstabelecimento: this.idEstabelecimento
        }
    }

    renderCorpo(){
        let id = this.props.navigation.getParam('id', null);
        if(!id){
            return(
                <OpaSpinner tamanho={50}/>
            )
        }
        return(
            <View>
                <Text>{id}</Text>
            </View>
        )
    }

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center'}}>
                <Cabecalho/>
                {this.renderCorpo()}
            </View>
        )
    }
}