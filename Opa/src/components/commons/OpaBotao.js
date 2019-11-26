import React, { Component } from "react"
import { Text, TouchableOpacity } from "react-native"
import estilo from "../../styles/style"


class OpaBotao extends Component {

    render() {
        if (this.props.estilo === 'primario') {
            return (
                <TouchableOpacity style={estilo.botaoPrimario} onPress={()=> this.props.acao}>
                    <Text style={estilo.botaoPrimarioTexto}>{this.props.children}</Text>
                </TouchableOpacity>
            )
        } else if (this.props.estilo === 'botaoCategoria') {
            return (
                <TouchableOpacity style={estilo.botaoShowCategoria} onPress={ this.props.acao}>
                    <Text style={estilo.botaoCategoriaTexto}>{this.props.children}</Text>
                </TouchableOpacity>
            )
        } else if( this.props.estilo === ''){
            return(
                <TouchableOpacity style={estilo.botaoCategoria} onPress={ this.props.acao}>
                    <Text style={estilo.botaoCategoriaTexto}>{this.props.children}</Text>
                </TouchableOpacity>
            )
        }
    }
}

export { OpaBotao }