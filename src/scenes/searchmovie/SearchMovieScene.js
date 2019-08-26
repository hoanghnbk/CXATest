import { FlatList, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './style';
import AppBar from 'src/components/AppBar';

import { BASE_IMAGE_URL } from 'src/util/constant';
import { Icon } from 'native-base';

const IMAGE_WIDTH = 500;
const baseUriImage = BASE_IMAGE_URL + IMAGE_WIDTH;

export default class SearchMovieScene extends Component {

    render() {
        const { movies = [] } = this.state;
        return (
            <View
                style={styles.container}
            >
                <AppBar
                    title={'Search Movies'}
                />
                <View style={styles.contentContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={this.changeTextSearchMovieHandler}
                            onSubmitEditing={this.searchMovieByName}
                            value={this.state.textSearchMovie}
                            placeholder="Search movie by name"
                            returnKeyType="done"
                            returnKeyLabel="done"
                        />
                        <TouchableOpacity onPress={this.clearSearch}>
                            <Icon
                                name={'close'}
                                style={styles.iconClear}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.searchMovieByName}
                            style={styles.buttonNavigate}
                        >
                            <Text>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={movies}
                        numColumns={2}
                        keyExtractor={(item, index) => item.id.toString() || index.toString()}
                        renderItem={this.renderItem}
                        onEndReached={this.onEndReach}
                    />
                </View>
            </View>
        );
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.onItemClick(item)}>
                <Image style={styles.imageBackground} source={{ uri: baseUriImage + item.poster_path }}/>
            </TouchableOpacity>
        );
    };
}

