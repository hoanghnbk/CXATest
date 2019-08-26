const posterRatio=2/3;
import {posterWidth} from 'src/util/constant';
import {Dimensions,Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';
export const width=Dimensions.get('window').width/2;
export default {
    container:{
      backgroundColor:'white',
        flex:1,
    },
    contentContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingTop: 20,
    },
    imageBackground:{
        width:width,
        minHeight:posterWidth/posterRatio,
    },
    containerBottom:{
        backgroundColor: '#00000060',
        height: 200,
        position:'relative',
        top:600
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
}
