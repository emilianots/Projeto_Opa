import React, {Component} from "react"
import {View, TextInput} from "react-native"
import estilo from "../../styles/style"


class OpaInput extends Component{

    render(){
        return(
            <View>
                <TextInput style={estilo.imputPrimario} placeholder={this.props.placeholder} placeholderTextColor='white' valor={this.props.valor}/>
            </View>
        )
    }
}

export {OpaInput}