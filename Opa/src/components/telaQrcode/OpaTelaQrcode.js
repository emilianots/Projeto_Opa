import React, { Component } from 'react';
import { View, Text, Vibration, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { OpaBotao, Cabecalho } from '../commons/index';
import QRCodeScanner from 'react-native-qrcode-scanner';


class OpaTelaQrcode extends Component {
    constructor() {
        super();
        this.state = {
            readed: false,
            data: null,
            focusedScreen: false
        }
    }

    randomNumber() {
        return Math.floor(Math.random() * 16);
    }

    cameraView() {
        return (
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={{
                    height: '100%',
                    width: '100%',
                }}
                onGoogleVisionBarcodesDetected={this.barcodeRecognized}
            >
                <Text style={{ position: 'absolute', top: '75%', color: 'white', textAlign: 'center', width: '100%' }}>Escanei um código QR OPA!</Text>
            </RNCamera>
        )
    }

    barcodeRecognized = ({ barcodes }) => {
        Vibration.vibrate(140)
        this.setState({ data: this.randomNumber() })
        barcodes.forEach(barcode => this.setState({ data: barcode.data, readed: true }));
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.addListener('willFocus', () =>
            this.setState({ focusedScreen: true })
        );
        navigation.addListener('willBlur', () =>
            this.setState({ focusedScreen: false })
        );
    }

    render() {
        const { focusedScreen } = this.state;
        if (focusedScreen && (!this.state.readed)) {
            return (
                <View style={{ flex: 1, height: '100%', width: '100%', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#ff5c5c', width: '100%', height: '15%', padding: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: '100%', height: '100%' }} resizeMode={'center'} source={require('../../../assets/images/opa-logo.jpeg')} />
                    </View>
                    {this.cameraView()}

                </View>
            )
        }
        else if (!this.state.focusedScreen) {
            return (
                <View>
                    <OpaBotao estilo='primario' acao={() => this.setState({ focusedScreen: true })}>Abrir Leitor de codigo QR</OpaBotao>

                </View>
            )
        }
        if (this.state.readed) {
            return (
                <View>
                    <Text>Navegando para o resturante {this.state.data}</Text>
                    <OpaBotao estilo='primario' acao={() => this.setState({ readed: false })}>Sair</OpaBotao>
                </View>
            )
        }
    }
};


export { OpaTelaQrcode };