import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { OpaBotao, Cabecalho } from '../commons/index';
import QRCodeScanner from 'react-native-qrcode-scanner';


class OpaTelaQrcode extends Component {
    onSuccess = (e) =>{
        alert(e.data);
    }

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                
            />
        )
    }
};


export { OpaTelaQrcode };