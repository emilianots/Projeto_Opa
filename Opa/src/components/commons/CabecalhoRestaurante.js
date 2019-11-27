import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { OpaBotao, Cabecalho, OpaInput, OpaSpinner } from './index';
import estilo from "../../styles/style";

//icons
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../config-icons.json';
OpaIcons = createIconSetFromFontello(fontelloConfig);

class CabecalhoRestaurante extends Component {

    constructor (){
        super()
        this.state = {
            loading : true
        }
    }
    

    render() {
        if (this.state.loading) {
            return <OpaSpinner tamanho={80} />
        }        
        return (
            <View style={{ height: 180, alignItems: 'center', width: '100%' }}>
                <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={{ uri: 'https://i.ibb.co/zfNJ3w2/puro-acai.png' }} />

                <View style={{ overflow: "hidden", borderRadius: 20, width: 330, height: 90, backgroundColor: '#fff', flexDirection: 'row', elevation: 4, position: 'absolute', bottom: -20 }}>
                    <View>
                        <Image style={{ borderRadius: 20, width: 80, height: '100%' }} resizeMode='stretch' source={{ uri: 'https://i.ibb.co/zfNJ3w2/puro-acai.png' }} />
                    </View>
                    <View>
                        <View style={{ padding: 10, width: 250, flexDirection: 'row', justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontSize: 20 }}>{this.props.id}</Text>
                                <Text style={{ fontSize: 12 }}>Açaí</Text>
                            </View>
                            <Text style={{ minWidth: 30, maxHeight: 18, paddingHorizontal: 7, backgroundColor: '#ffab0a', borderRadius: 20, }}>4.5</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center' ,flexDirection: 'row'}}>
                            <OpaIcons name='mesa' size={22} color='gray' />
                            <Text style={{marginHorizontal: 2 ,fontSize: 13, color: 'gray' }}>10/30</Text>

                            <Text style={{marginHorizontal: 3 ,fontSize: 25, color: 'gray' }}>|</Text>


                            <OpaIcons name='relogio' size={18} color='gray' />
                            <Text style={{marginHorizontal: 2 ,fontSize: 13, color: 'gray' }}>18h-23h</Text>

                            <Text style={{marginHorizontal: 3 ,fontSize: 25, color: 'gray' }}>|</Text>

                            <OpaIcons name='porta-aberta' size={22} color='gray' />
                            <Text style={{marginHorizontal: 2 ,fontSize: 13, color: 'gray' }}>Aberto</Text>
                        </View>
                    </View>
                </View>

            </View>
        )

    }
};
export { CabecalhoRestaurante }