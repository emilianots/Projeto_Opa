import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { OpaBotao, Cabecalho } from '../commons/index';
import estilo from "../../styles/style";

//icons
import {createIconSetFromFontello} from 'react-native-vector-icons'; 
import fontelloConfig from '../../config.json'; 
import { ScrollView } from 'react-native-gesture-handler';
OpaIcons = createIconSetFromFontello (fontelloConfig); 

class OpaTelaPerfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgPerfil: undefined,
            nomeUser: 'Joel Lisboa', //undefined ?
            emAndamento: [],
            recebidos: [],
            carregando: true
        };

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f6f6f6", overflow: "hidden" }}>
                <View style={estilo.cabecalho2}>
                    <View>
                        <Image resizeMethod='scale' style={estilo.imgPerfil} source={require('../../../assets/images/joel-test.jpg')}/>
                    </View>
                        <Text style={estilo.textTitulo}>{this.state.nomeUser}</Text>
                    <View style={{ flexDirection: 'row', overflow: "visible"}}>
                        <TouchableOpacity
                            style={{backgroundColor: '#fff', borderRadius: 100, padding: 10, elevation: 2, position:"absolute", bottom: -30, left: 140}}>
                                <OpaIcons name='relogio' size= {28} color= '#ff5c5c' />
                            {/* <Text style={estilo.botaoPrimarioTexto}>Editar Perfil</Text> */}
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView contentContainerStyle={{marginTop: 20, paddingBottom: 50,flexDirection: 'column', alignItems: 'center', endFillColor: 'red'}}>
                    <TouchableOpacity style={estilo.optionsBlock}>
                        <OpaIcons style={{marginRight: 10}} name='favoritar' size={22} color= '#ff5c5c'/>
                        <Text style={estilo.textOptionsBlock}>Favoritos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.optionsBlock}>
                        <OpaIcons style={{marginRight: 10}} name='favoritar' size={22} color= '#ff5c5c'/>
                        <Text style={estilo.textOptionsBlock}>Pagamentos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.optionsBlock}>
                        <OpaIcons style={{marginRight: 10}} name='home' size={22} color= '#ff5c5c'/>
                        <Text style={estilo.textOptionsBlock}>Cupons</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.optionsBlock}>
                        <OpaIcons style={{marginRight: 10}} name='home' size={22} color= '#ff5c5c'/>
                        <Text style={estilo.textOptionsBlock}>Notificações</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.optionsBlock}>
                        <OpaIcons style={{marginRight: 10}} name='home' size={22} color= '#ff5c5c'/>
                        <Text style={estilo.textOptionsBlock}>Segurança</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.optionsBlock}>
                        <OpaIcons style={{marginRight: 10}} name='home' size={22} color= '#ff5c5c'/>
                        <Text style={estilo.textOptionsBlock}>Configurações</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
}

export { OpaTelaPerfil };