const posterRatio=2/3;
import {posterWidth} from 'src/util/constant';
import {Dimensions} from 'react-native';
export const width=Dimensions.get('window').width;
export default {
    container:{
        flex:1
    },
    imageBackground:{
        width:width,
        minHeight:width/posterRatio,
    },
    containerBottom:{
        backgroundColor: '#00000060',
        height: 200,
        position:'relative',
        top:600
    },
    descriptionContainer:{
        padding:10
    }
}
