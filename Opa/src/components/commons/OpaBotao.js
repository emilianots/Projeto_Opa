import React, {Component} from "react"
import {Text, TouchableOpacity} from "react-native"
import estilo from "../../styles/style"


class OpaBotao extends Component{

    render(){
        return(
            <TouchableOpacity style={estilo.botaoPrimario}>
                <Text style={estilo.botaoPrimarioTexto}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

export {OpaBotao}