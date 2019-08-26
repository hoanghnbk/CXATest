const posterRatio=2/3;
import {posterWidth} from 'src/util/constant';
import {Dimensions} from 'react-native';
export const width=Dimensions.get('window').width/2;
export default {
    container:{
      backgroundColor:'white'
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
    }
}
