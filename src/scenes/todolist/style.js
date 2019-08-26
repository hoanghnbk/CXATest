import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default {
    container: {
        flex: 1,
    },
    contentContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingTop: 20,
    },
    list: {
        width: '100%',
    },
    listItem: {
        paddingStart:5,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18,
        flex:1,
    },
    listItemCont: {
        paddingVertical:8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginVertical: 2,
    },
    button:{
        paddingHorizontal:10
    },
    textInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: 'gray',
        width: '90%',
        borderWidth:isAndroid?1:0,
        flex:1
    },
    buttonNavigate:{
        paddingHorizontal: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    iconCheckMark:{
        color:'green',
        fontSize: 30,
        marginHorizontal:5
    },
    iconClose:{
        color:'red'
    },
    iconClear:{
        color:'grey'
    }

}
