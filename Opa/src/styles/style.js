import { StyleSheet } from 'react-native'

const corPrimaria = 'blue'

const estilo = StyleSheet.create({
    app:{
        flex: 1,
        alignItems: 'center'
    },

    imputPrimario:{
        width: 350,
        margin: 5,
        paddingHorizontal: 30,
        borderRadius: 100,
        backgroundColor: 'red',
        fontSize: 18
    },
    botaoPrimario:{
        padding: 10,
        borderRadius: 6,
        backgroundColor: 'blue',
        borderColor: corPrimaria,
    },
    botaoPrimarioTexto:{
        fontWeight: 'bold',        
        color: 'white'
    }
})

export default estilo