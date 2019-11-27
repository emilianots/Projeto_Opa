import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { OpaBotao, Cabecalho } from '../commons/index';
import estilo from "../../styles/style";
import { ScrollView } from 'react-native-gesture-handler';

//icons
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../config-icons.json';
OpaIcons = createIconSetFromFontello(fontelloConfig);

class ProdutosCardapio extends Component {

    render() {
        return (
            <View style={{backgroundColor: "#f6f6f6", overflow: "hidden" }}>

                <View style={{padding: 20, height: '100%'}}>
                    <TouchableOpacity style={{ overflow: "hidden", borderRadius: 20, width: 370, height: 80, backgroundColor: '#fff', flexDirection: 'row', marginVertical: 30, elevation: 1, }}
                        onPress={() => this.props.navigation.navigate('RestauranteReservar')}>
                        <View>
                            <Image style={{ borderRadius: 20, width: 80, height: '100%' }} resizeMode='stretch' source={{ uri: 'http://www.nidelins.com.br/wp-content/uploads/2019/04/hamburguer-xique-xique.jpeg' }} />
                        </View>
                        <View>
                            <View style={{ padding: 10, width: 250, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontSize: 20 }}>Sanduiche de calabresa </Text>
                                    <Text style={{color: '#ff5c5c', fontSize: 12, marginTop: 20 }}>Pedidos: 540</Text>
                                </View>
                                <Text style={{marginLeft: 20, color: '#ff5c5c', fontSize: 16 }}>R$ 13,00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export { ProdutosCardapio };