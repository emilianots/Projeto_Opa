import { StyleSheet } from 'react-native'

const corPrimaria = '#ff5c5c'

const estilo = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: 'center'
    },

    cabecalho: {
        width: '105%',
        marginBottom: 15,
        paddingHorizontal: 20,
        backgroundColor: corPrimaria,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },

    cabecalhoTexto: {
        marginHorizontal: 5,
    },

    imputPrimario: {
        width: '85%',
        marginVertical: 10,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 3,
        borderRadius: 100,
        fontSize: 16
    },
    botaoPrimario: {
        width: '100%',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'blue',
        borderColor: corPrimaria,
    },
    botaoPrimarioTexto: {
        fontWeight: 'bold',
        color: 'white'
    },


    // abaixo os estilos do cabeçalho das seções na home
    secaoCabecalho: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    secaoEtiqueta: {
        minWidth: '35%',
        marginRight: 40,
        alignItems: 'flex-end',
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        paddingVertical: 5,
        paddingRight: 15,
        backgroundColor: corPrimaria,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 4,
    },


    //estilos dos cards das seções da home

    restauranteCard:{
        width: 140,
        height: 140,
        margin: 9,
        marginBottom: 15,
        position: 'relative',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    restauranteNota:{
        minWidth: 30,
        position: 'absolute',
        top: 10,
        left: 10,
        paddingHorizontal: 7,
        backgroundColor: '#ffcb5c',
        borderRadius: 20,
    },

    restauranteNome:{
        width: '80%',
        bottom: -5,
        backgroundColor: 'white',
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 10,
        position: 'absolute',
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 4,
    }
})

export default estilo