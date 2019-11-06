import React, { Component } from 'react';
import {ActivityIndicator, View } from 'react-native';

class OpaSpinner extends Component{

    render(){
        return(
            <View style={{width: '100%',height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={this.props.tamanho || 'small'} color='#ff5c5c'/>
            </View>
        )
    }
}

export {OpaSpinner};
