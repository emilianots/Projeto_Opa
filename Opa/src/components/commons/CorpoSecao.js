import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import estilo from '../../styles/style';


/* 
    
    Esse componente renderiza o corpo de cada seção - scroll horizontal

*/
class CorpoSecao extends Component {

    renderItemList(nome, id, nota = 0.0, imgURL = null) { // metodo que renderiza umcard de restaurante por vez
        // os valores recebidos devem ser ajustados futuramente para mostrar mais dados em cada card
        return (
            <TouchableOpacity style={estilo.restauranteCard} onPress={()=> console.log(id)}>
                <Text style={estilo.restauranteNota}>{nota}</Text>
                <View style={estilo.restauranteImg}>
                    <Text>LOGO</Text>
                </View>
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