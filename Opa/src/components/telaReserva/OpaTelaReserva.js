import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilo from "../../styles/style";
import { Cabecalho2 } from '../commons/Cabecalho2';

class OpaTelaReserva extends Component {

    render() {
        return (
            <View style={estilo.app}>
                <Cabecalho2/>
                
                <View style={estilo.infoBlock}>
                    <View>
                        <OpaIcons style={{marginRight: 10 }} name='local' size={40} color='#ff5c5c'/>
                    </View>

                    <View>
                        <Text>Sua localização atual</Text>
                        <Text style={{color: '#ff5c5c', fontSize: 22}}>Quixadá, Ceará</Text>
                    </View>
                </View>

                <OpaIcons style={{marginTop: 80, opacity: 0.3}} name='restaurante' size={160} color='#ff5c5c'/>

                <TouchableOpacity style={estilo.botaoTerceario}
                    onPress = {() => this.props.navigation.navigate('ExplorarRestaurantes')}    
                >
                    <Text style={estilo.botaoTercearioTexto}>Explorar restaurantes</Text>
                </TouchableOpacity>

            </View>
        )
    }
};


export { OpaTelaReserva };