import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {OpaBotao, Cabecalho} from './commons/index';

export default class OpaTelaMapa extends Component{

    render(){
        return(
            <View>
                <Cabecalho titulo='Mapa'/>
            </View>
        )
    }
}