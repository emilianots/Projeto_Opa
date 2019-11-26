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
                onRead={this.i}
                topContent={
                    <View>
                        <Text>
                            Escaneia aí mah!
                        </Text>
                    </View>
                }
                bottomContent={
                    <View>
                        <Text>Opa! e ai cara kkkkkk</Text>
                    </View>
                }
            />
        )
    }
};


export { OpaTelaQrcode };