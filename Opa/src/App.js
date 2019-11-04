import React, { Component } from 'react';
import { View, Text } from 'react-native';
import estilo from './styles/style';


export default class App extends Component {

  render() {
    return (
      <View style={estilo.app}>
        <Text>
          Bem vindo ao OPA!
        </Text>
      </View>
    )
  }
}