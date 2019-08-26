
import { POSTER_RATIO, POSTER_WIDTH } from 'src/util/constant';
import {Dimensions} from 'react-native';
export const width=Dimensions.get('window').width/2;
export default {
    container:{
      backgroundColor:'white'
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
    }
}
