import React, { Component } from "react"
import { View, TextInput } from "react-native"
import estilo from "../../styles/style"


class OpaInput extends Component {

    render() {
        return (
            <View style={{width: '100%', alignItems: 'center'}}>
                <TextInput
                    style={estilo.imputPrimario}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='gray'
                    valor={this.props.valor} />
                    <OpaIcons style={{marginRight: 10, position: 'absolute', top: 12, right: 30 }} name='lupa' size={22} color='#ff5c5c'/>
            </View>
        )
    }
}

export { OpaInput }