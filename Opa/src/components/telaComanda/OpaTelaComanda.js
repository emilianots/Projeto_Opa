import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {OpaBotao, Cabecalho} from '../commons/index';
import Icon from 'react-native-vector-icons/Ionicons';
import estilo from "../../styles/style";


class OpaTelaComanda extends Component{

    constructor(props) {
        super(props);
        this.state = {
            emAndamento: [],
            recebidos: [],
            carregando: true
        };

    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: "#f6f6f6", overflow: "hidden"}}>
                <View style={estilo.cabecalho2}>
                    <Text style={estilo.textTitulo}>Meus Pedidos</Text>
                </View>
            </View>

        )
    }
}

export {OpaTelaComanda};