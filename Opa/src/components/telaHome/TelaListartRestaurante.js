import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class TelaListarRestaurante extends Component {


    renderItemList(nome, key, nota, imgULR){
        return(
            <Text>
                {nome}
            </Text>
        )
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.resultado}
                    renderItem={({ item }) => // <-- sem chaves aqui
                        this.renderItemList(item.nome, item.key, item.nota, item.imagemULR)
                    }
                />
            </View>
        )
    }
}

//export { TelaListarRestaurante };