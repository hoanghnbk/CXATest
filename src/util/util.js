import randomColor from 'randomcolor';
import { Alert } from 'react-native';

export const randomColorLight = () => {
    return { backgroundColor: randomColor({ luminosity: 'light', alpha: 0.5 }) };
};

export const confirmDialog = (callback, title = 'Are you sure ?', message = '') => {
    Alert.alert(title, message, [
            {
                text: 'OK',
                onPress: callback,
            },
            {
                text: 'Cancel',
            },
        ],
        { cancelable: false },
    );
};
