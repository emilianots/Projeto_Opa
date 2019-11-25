import React, { Component } from "react";
import { View, TextInput } from "react-native";
import Icon from 'react-native-ionicons'
import estilo from "../../styles/style"


class OpaInput extends Component {

    render() {
        return (
            <View style={estilo.containerPesquisa}>
                <Icon name='search' color='gray' size={20}/>
                <TextInput
                    style={estilo.imputPesquisa}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='gray'
                    valor={this.props.valor}

                    onFocus={this.props.onFocus}
                    onBlur={this.props.onFocus}
                />
            </View>
        )
    }
}

export { OpaInput }