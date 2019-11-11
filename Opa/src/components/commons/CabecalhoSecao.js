import React, { Component } from 'react';
import { View, Text } from 'react-native';
import estilo from '../../styles/style';


/* 
    
    Esse componente renderiza o cabeçalho de cada seção - etiqueta e barra da direita

*/
class CabecalhoSecao extends Component {

    render() {
        return (
            //abaixo é renderizado a etiqueta mais a linha que fica do lado dela
            <View style={estilo.secaoCabecalho}>
                <View style={estilo.secaoEtiqueta} >
                    <Text style={{ color: 'white', fontSize: 16 }} >{this.props.titulo}</Text>
                </View>

                <View style={{ width: '60%', height: 2, backgroundColor: 'red', }} >

                </View>

            </View>
        )
    }
}

export { CabecalhoSecao }