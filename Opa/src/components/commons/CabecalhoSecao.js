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
                <Text style={estilo.secaoEtiqueta}>{this.props.titulo}</Text>
                {/* <View style={{ width: '60%', height: 2, backgroundColor: 'blue', }} >
                </View> */}
            </View>
        )
    }
}

export { CabecalhoSecao }