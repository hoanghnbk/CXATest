import React, { Component } from 'react';

import { AppContainer } from 'src/routers';
import NavigationService from 'src/routers/NavigationService';
import {YellowBox} from 'react-native';


YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted']);

export default class App extends Component {

    render() {
        return (
            <AppContainer ref={navigatorRef => {
                if(navigatorRef)
                    NavigationService.setTopLevelNavigator(navigatorRef);
            }} />
        );
    }
}
