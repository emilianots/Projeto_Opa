import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { OpaBotao, Cabecalho } from '../commons/index';
import estilo from "../../styles/style";
import { ScrollView } from 'react-native-gesture-handler';

//icons
import {createIconSetFromFontello} from 'react-native-vector-icons'; 
import fontelloConfig from '../../../config-icons.json'; 
OpaIcons = createIconSetFromFontello (fontelloConfig); 

class Categoria1 extends Component {

    render() {
        return (
            <View style={{flex: 1,backgroundColor: "#f6f6f6", overflow: "hidden" }}>
                <Text> CATEGORIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
            </View>
        )
    }
}

export { Categoria1 };