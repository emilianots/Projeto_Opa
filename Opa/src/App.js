import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import TabNavigator from './Routes'

import * as firebase from 'firebase';
import firebaseConfig from '../firebaseData/firebaseKey'

console.disableYellowBox = true;
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: true
    }

    if (!firebase.apps.length) { // verificação aqui pois no componentDidMout() da erro
      firebase.initializeApp(firebaseConfig) // inicialização da aplicação do firebase caso não haja nenhuma inicializada

    }
  }

  render() {
    NetInfo.fetch().then(state =>{
      if(!state.isConnected){
        this.setState({
          connected: false
        })
        
      }
    });

    if(this.state.connected){
      console.log('c')
      return (
        <View style={{ flex: 1, backgroundColor: "#eee" }}>
          <TabNavigator />

        </View>
      )
    }
    return(
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, color: '#ff5c5c'}}>OPA! Falha na conexão!</Text>
        <Text style={{fontSize: 16, color: 'gray'}}>Verifique sua conexão e tente novamente</Text>
      </View>
    )
    // if (!this.state.connected) {
    //   return (
    //     <View>
    //       <Text>Verifique a sua conexão!</Text>
    //     </View>
    //   )
    // }

  }
}