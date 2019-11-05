import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {OpaBotao, Cabecalho} from './commons/index';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OpaTelaHome extends Component{

    render(){
        return(
            <View>
                <Cabecalho titulo='HomePage'/>
                <Icon name='md-menu' size={30}/>
            </View>
        )
    }
}