import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import estilo from '../../styles/style';
import { thisExpression } from '@babel/types';


/* 
    
    Esse componente renderiza o corpo de cada seção - scroll horizontal

*/
class CorpoSecao extends Component {

    renderItemList(nome, id, nota, imgURL = null) { // metodo que renderiza umcard de restaurante por vez
        // os valores recebidos devem ser ajustados futuramente para mostrar mais dados em cada card
        return (
            <TouchableOpacity style={estilo.restauranteCard} onPress={() => console.log(id)}>
                <View style={estilo.restauranteImg}>
                    <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../../../assets/images/img.jpeg')} />
                </View>
                <Text style={estilo.restauranteNota}>{nota}</Text>
                <Text style={estilo.restauranteNome}>{nome}</Text>

            </TouchableOpacity>
        )
    }

    render() {
        return (

            // abaixo a view que renderiza a lista com os cards mostrandos todos os restaurantes da lista
            // cria a track horizontal com scroll
            <View style={{ width: '100%' }}>
                <FlatList
                    data={this.props.lista}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => // <-- sem chaves aqui
                        this.renderItemList(item.nome, item.key, item.nota, item.imagemULR)
                    }
                />
            </View>
        )
    }
}

export { CorpoSecao }