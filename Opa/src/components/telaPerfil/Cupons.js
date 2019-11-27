import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { OpaBotao, Cabecalho } from '../commons/index';
import estilo from "../../styles/style";

//icons
import {createIconSetFromFontello} from 'react-native-vector-icons'; 
import fontelloConfig from '../../../config-icons.json'; 
OpaIcons = createIconSetFromFontello (fontelloConfig);

class Cupons extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f6f6f6", alignItems: 'center', justifyContent: 'center'}}>
                <OpaIcons style={{marginRight: 10}} name='favoritar' size={22} color= '#ff5c5c'/>
                <Text>Você nao possui nenhum cupom</Text>
                <Text>Avisaremos sempre que você ganhar um cupom 
                <OpaIcons style={{marginRight: 10}} name='favoritar' size={22} color= '#ff5c5c'/>
                </Text>
            </View>
        )
    }
}

export { Cupons };