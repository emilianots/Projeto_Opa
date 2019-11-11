import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';

export default class TelaListarRestaurante extends Component {


    renderItemList(nome, key, nota, imgULR) {
        return (
            <TouchableOpacity underlayColor='red' >
                <View style={{ backgroundColor: 'white', width: '100%', flexDirection: 'row', borderRadius: 7, marginBottom: 10 }}>

                    <View style={{ width: 90, height: 90, backgroundColor: '#ccc', borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 12 }}>Image placeholder</Text>
                    </View>
                    <View style={{ width: '55%', paddingVertical: 7, marginRight: 10 }}>
                        <Text style={{ fontSize: 17 }}>{nome}</Text>
                        <Text style={{ fontSize: 12, color: 'red', marginBottom: 15 }}>Tipo restaurante - 0km</Text>
                        <Text style={{ fontSize: 12 }}>Espera média: 30 min</Text>
                    </View>
                    <View style={{ width: 45, height: 18, marginVertical: 10, backgroundColor: '#ffab0a', borderRadius: 20, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 12, color: 'white' }}>{nota}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, width: '97%', paddingHorizontal: 15, marginBottom: 20 }}>
                <FlatList
                    data={this.props.resultado}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => // <-- sem chaves aqui
                        this.renderItemList(item.nome, item.key, item.nota, item.imagemULR)
                    }
                />
            </View>
        )
    }
}

//export { TelaListarRestaurante };