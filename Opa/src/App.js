import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import estilo from './styles/style';
import {OpaInput, OpaBotao} from './components/commons/index';


export default class App extends Component {

  render() {
    return (
      <View style={estilo.app}>
        <Text>
          Bem vindo ao OPA!
        </Text>
        <OpaInput placeholder='Pesquisar'/>
        <OpaBotao>
          Botão generico
        </OpaBotao>
      </View>

    )
  }
}