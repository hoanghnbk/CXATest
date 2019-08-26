
import { POSTER_RATIO, POSTER_WIDTH } from 'src/util/constant';
import {Dimensions,Platform} from 'react-native';



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
        minHeight:POSTER_WIDTH/2/POSTER_RATIO,
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
        flex:1
    },
    buttonNavigate:{
        paddingHorizontal: 10,
        justifyContent:'center',
        alignItems:'center'
    },
}
