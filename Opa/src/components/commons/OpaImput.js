import React, { Component } from "react"
import { View, TextInput } from "react-native"
import estilo from "../../styles/style"


class OpaInput extends Component {

    render() {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TextInput
                    style={estilo.imputPrimario}
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