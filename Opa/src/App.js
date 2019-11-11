import React, { Component } from 'react';
import { View, Text } from 'react-native'
import TabNavigator from './Routes'

import * as firebase from 'firebase';
import firebaseConfig from '../firebaseData/firebaseKey'


export default class App extends Component {

  constructor(props) {
    super(props);

    if (!firebase.apps.length) { // verificação aqui pois no componentDidMout() da erro
      firebase.initializeApp(firebaseConfig); // inicialização da aplicação do firebase caso não haja nenhuma inicializada
    }

  }

  render() {
    return (
      //navegação principal
      //abaixo mostra as tabs de cada tela principal do app - home, cardápio, comanda, etc.
      <TabNavigator />
    )
  }
}