import React, { Component } from 'react';
import { View, Text, Vibration } from 'react-native';
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

    onSuccess = (e) => {
        alert(e.data);
    }

    barcodeRecognized = ({ barcodes }) => {
        Vibration.vibrate(140)
        barcodes.forEach(barcode => this.setState({ data: barcode.data, readed: true }));
        console.log(this.state);

    }

    cameraView() {
        return (
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={{
                    flex: 1,
                    width: '100%',
                }}
                onGoogleVisionBarcodesDetected={this.barcodeRecognized}
            >
            </RNCamera>
        )
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
                this.cameraView()
            )
        }
        else if (!this.state.focusedScreen) {
            return (
                <View><Text>Reinicia seu aplicativo</Text></View>
            )
        }
        if (this.state.readed) {
            return (
                <View>
                    <Text>Navegando para o resturante {this.state.data}</Text>
                    <OpaBotao estilo='primario' acao={()=> this.setState({readed: false})}>Sair</OpaBotao>
                </View>
            )
        }
    }
};


export { OpaTelaQrcode };