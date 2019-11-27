import React, { Component } from "react";
import { View, TextInput } from "react-native";
import estilo from "../../styles/style"


class OpaInput extends Component {

    render() {
        return (
            <View style={estilo.containerPesquisa}>
                <TextInput
                    style={estilo.imputPesquisa}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='gray'
                    valor={this.props.valor}

                    onFocus={this.props.onFocus}
                    onBlur={this.props.onFocus}
                />
                    <OpaIcons style={{marginRight: 10, top: 12, right: 30 }} name='lupa' size={22} color='#ff5c5c'/>
            </View>
        )
    }
}

export { OpaInput }