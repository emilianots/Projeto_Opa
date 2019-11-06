import React, { Component } from 'react';
import { View, Text } from 'react-native';
import estilo from '../../styles/style';
import { CabecalhoSecao, CorpoSecao } from './index';


/* 
    Esse componente é o responsável por renderizar uma seção na tela Home
    Ele renderiza com o msm estilo as seções de Destaques, Abertos, Recomendados, ect.

*/
class SecaoHome extends Component {

    render() {
        return (

            // renderiza a etiqueta/cabeçalho da seção mais o corpo da seção onde deverá ter as imagens
            // de cada restaurante mais seu nome e avaliação
            <View>
                <CabecalhoSecao titulo={this.props.titulo}/>
                <CorpoSecao lista={this.props.destaques}/>
            </View>
        )
    }
}

export { SecaoHome }