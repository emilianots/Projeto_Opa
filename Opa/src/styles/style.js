import { StyleSheet } from 'react-native'

const corPrimaria = '#ff5c5c';
const corSecundaria = '#f6f6f6';
const fontePrimaria = 'Montserrat-Medium';
const fonteSecundaria = 'Gotham Light';

const estilo = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: corSecundaria,
    },

    textTitulo: {
        fontSize: 24,
        paddingTop: 5,
        color: '#fff'
    },

    textValor: {
        paddingTop: 20,
        fontSize: 30,
        color: '#fff'
    },

    cabecalho: {
        width: '100%',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: corPrimaria,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    cabecalho2: {
        overflow: "visible",
        width: '100%',
        height: '30%',
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: corPrimaria,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },

    cabecalho3: {
        width: '100%',
        height: '30%',
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: corPrimaria,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },

    categoriaTrack: {
        width: '85%',
        marginVertical: 10,
    },

    categoriaCard: {
        minWidth: '10%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },

    categoriaImg: {
        width: 130,
        height: 130,
        padding: 5,
    },

    containerPesquisa: {
        width: '90%',
        height: 45,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',

    },

    imputPesquisa: {
        width: '100%',
        fontSize: 16,
    },

    // boatao primario -----
    botaoPrimario: {
        overflow: 'hidden',
        width: 130,
        padding: 10,
        margin: 30,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    botaoPrimarioTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: corPrimaria,
        fontFamily: fontePrimaria,
    },
    //botao secundario
    botaoSecundario: {
        overflow: 'hidden',
        width: 130,
        padding: 10,
        margin: 30,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
    },

    botaoSecundarioTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: fontePrimaria
    },
    //botao terceario
    botaoTerceario: {
        overflow: 'hidden',
        width: 230,
        padding: 12,
        margin: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: corPrimaria,
        alignItems: 'center',
    },

    botaoTercearioTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: fontePrimaria
    },


    //botao de mostrar categoria
    botaoShowCategoria: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        backgroundColor: 'white',
        borderRadius: 20,
        fontFamily: 'Montserrat-Light'
    },

    botaoCategoriaTexto: {
        fontSize: 14,
        color: corPrimaria,
        fontFamily: fontePrimaria
    },

    // botão de categoria

    botaoCategoria: {

    },

    // abaixo os estilos do cabeçalho das seções na home
    secaoCabecalho: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    secaoEtiqueta: {
        marginRight: 40,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: corPrimaria,
        color: 'white',
        fontFamily: fontePrimaria,

        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 4,
    },


    //estilos dos cards das seções da home

    restauranteCard: {
        width: 140,
        height: 140,
        margin: 9,
        marginBottom: 15,
        position: 'relative',
        borderRadius: 10,
        backgroundColor: 'gray',
        alignItems: 'center'

    },
    restauranteNota: {
        minWidth: 30,
        position: 'absolute',
        top: 10,
        left: 10,
        paddingHorizontal: 7,
        backgroundColor: '#ffab0a',
        borderRadius: 20,
    },

    restauranteImg: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 10
    },

    restauranteNome: {
        width: '80%',
        bottom: -5,
        backgroundColor: 'white',
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 10,
        position: 'absolute',
        textAlign: 'center',
        fontFamily: fontePrimaria,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 4,
    },

    //Estilos aba perfil
    imgPerfil: {
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 100,
        width: 100,
        height: 100,
    },

    optionsBlock: {
        padding: 20,
        borderRadius: 20,
        width: 330,
        height: 68,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 12,
        elevation: 1,
    },
    textOptionsBlock: {
        fontSize: 20,
        color: corPrimaria,
    },

    //geral
    infoBlock: {
        padding: 20,
        borderRadius: 20,
        width: 330,
        height: 80,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 12,
        elevation: 1,
    }

})

export default estilo