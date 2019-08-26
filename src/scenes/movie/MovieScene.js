import { FlatList, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './style';
import AppBar from 'src/components/AppBar';

import mock from './mock';
import { BASE_IMAGE_URL } from 'src/util/constant';

const IMAGE_WIDTH = 500;
const baseUriImage = BASE_IMAGE_URL+IMAGE_WIDTH;

export default class MovieScene extends Component {

    render() {
        const {movies=[]}=this.state;
        return (
            <View
                style={styles.container}
            >
                <AppBar
                    title={'Feature Movies'}
                    disableBack
                    rightIcon={'list'}
                    rightPress={this.onHeaderButtonRightPress}/>
                <FlatList
                    data={movies}
                    numColumns={2}
                    keyExtractor={(item,index)=>item.id.toString()||index.toString()}
                    renderItem={this.renderItem}
                    onEndReached={this.onEndReach}
                />
            </View>
        );
    }

    renderItem=({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>this.onItemClick(item)}>
            <Image style={styles.imageBackground} source={{ uri: baseUriImage + item.poster_path }} />
            </TouchableOpacity>
        );
    }
}

