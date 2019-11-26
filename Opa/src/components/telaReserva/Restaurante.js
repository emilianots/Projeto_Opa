import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import estilo from '../../styles/style';
import { thisExpression } from '@babel/types';


/* 
    
    Esse componente renderiza o corpo de cada seção - scroll horizontal

*/
class Restaurante extends Component {

    renderItemList(nome, id, nota, fotoURL) {
        return (
                <TouchableOpacity style={{ overflow: "hidden", borderRadius: 20, width: 330, height: 80, backgroundColor: '#fff', flexDirection: 'row', marginBottom: 12, elevation: 1, }}
                    onPress={() => this.props.navigation.navigate('RestauranteReservar')}>
                    <View>
                        <Image style={{ borderRadius: 20, width: 80, height: '100%' }} resizeMode='stretch' source={{ uri: fotoURL }} />
                    </View>
                    <View>
                        <View style={{ padding: 10, width: 250, flexDirection: 'row', justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontSize: 20 }}>{nome} </Text>
                                <Text style={{ fontSize: 12 }}>Restaurante e cervejaria</Text>
                            </View>
                            <Text style={{ minWidth: 30, maxHeight: 18, paddingHorizontal: 7, backgroundColor: '#ffab0a', borderRadius: 20, }}>{nota}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        );
    }

    render() {
        return (

            // abaixo a view que renderiza a lista com os cards mostrandos todos os restaurantes da lista
            // cria a track horizontal com scroll
            <View style={{ width: '100%' }}>
                <FlatList
                    data={this.props.lista}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => // <-- sem chaves aqui
                        this.renderItemList(item.nome, item.key, item.nota, item.fotoURL)
                    }
                />
            </View>
        )
    }
}

export { Restaurante }