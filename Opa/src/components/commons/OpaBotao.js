import React, { Component } from "react"
import { Text, TouchableOpacity } from "react-native"
import estilo from "../../styles/style"


class OpaBotao extends Component {

    render() {
        if (this.props.estilo === 'primario') {
            return (
                <TouchableOpacity style={estilo.botaoPrimario}>
                    <Text style={estilo.botaoPrimarioTexto}>{this.props.children}</Text>
                </TouchableOpacity>
            )
        } else if (this.props.estilo === 'categoria') {
            return (
                <TouchableOpacity style={estilo.botaoCategoria}>
                    <Text style={estilo.botaoPrimarioTexto}>{this.props.children}</Text>
                </TouchableOpacity>
            )
        }
    }
}

export { OpaBotao }