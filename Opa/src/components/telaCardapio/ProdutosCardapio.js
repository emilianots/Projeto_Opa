import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { OpaBotao, Cabecalho, OpaSpinner } from '../commons/index';
import estilo from "../../styles/style";
import { ScrollView } from 'react-native-gesture-handler';

import * as firebase from 'firebase';
import 'firebase/firestore';

//icons
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../config-icons.json';
OpaIcons = createIconSetFromFontello(fontelloConfig);

class ProdutosCardapio extends Component {

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection('produtos');
        this.state = { loading: true, produtos: [] };
    }

    componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.alimentarProdutos.bind(this));//onSnapshot
    }

    alimentarProdutos(query) {
        let produtos = [];
        query.forEach((doc) => {
            //const { titulo, preco, autor, imagem } = doc.data();
            produtos.push({
                key: doc.id,
                nome: doc.data().nome,
                categoria: doc.data().categoria,
                preco: doc.data().preco,
                fotoURL: doc.data().fotoURL,
                pedidos: doc.data().pedidos
            });
        });//forEach 
        this.setState({ loading: false, produtos });
    }

    // renderAlert(key) {
    //     Alert.alert(
    //         'Excluir produto',
    //         'Tem certeza?',
    //         [
    //             { text: 'Sim', onPress: () => this.excluirProduto(key) },
    //             { text: 'Cancelar', onPress: () => console.log('Cancelar Pressed') },
    //         ],
    //         { cancelable: false },
    //     );
    // }


    render() {
        if (this.state.loading) {
            return <OpaSpinner />
        }
        return (

            <FlatList style= {{marginTop: 50}}
                showsVerticalScrollIndicator= {false}
                data={this.state.produtos}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ overflow: "hidden", borderRadius: 20, width: 370, height: 80, backgroundColor: '#fff', flexDirection: 'row', marginVertical: 2, elevation: 3, }}
                        onPress={() => this.props.navigation.navigate('RestauranteReservar')}>
                        <View>
                            <Image style={{ borderRadius: 20, width: 80, height: '100%' }} resizeMode='stretch' source={{ uri: item.fotoURL }} />
                        </View>
                        <View>
                            <View style={{ padding: 10, width: 250, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontSize: 20 }}>{item.nome}</Text>
                                    <Text style={{ color: '#ff5c5c', fontSize: 12, marginTop: 20 }}>Pedidos: {item.pedidos}</Text>
                                </View>
                                <Text style={{ marginLeft: 20, color: '#ff5c5c', fontSize: 16 }}>R${item.preco}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                }

            />

        )
    }
}

export { ProdutosCardapio };