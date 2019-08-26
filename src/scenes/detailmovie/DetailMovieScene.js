import { Image, ScrollView,View } from 'react-native';
import React, { Component } from 'react';

import styles from './style';
import mock from 'src/scenes/movie/mock';
import AppBar from 'src/components/AppBar';
import NavigationService from 'src/routers/NavigationService';
import DescriptionItem from 'src/scenes/detailmovie/components/DescriptionItem';
import { BASE_IMAGE_URL } from 'src/util/constant';

const IMAGE_WIDTH = 500;
const baseUriImage = BASE_IMAGE_URL+IMAGE_WIDTH;

export default class DetailMovieScene extends Component {
    constructor(props) {
        super(props);
        const detail = props.navigation.getParam('detail') || mock.items[0];
        this.state = {
            detail,
        };
    }


    render() {
        const { detail } = this.state;
        return (
            <ScrollView
                style={styles.container}
            >
                <AppBar
                    title={'Detail Movie'}
                />
                <Image
                    style={styles.imageBackground}
                    source={{ uri: baseUriImage + detail.poster_path }}
                />
                <View style={styles.descriptionContainer}>
                    <DescriptionItem
                        title={'Title'}
                        content={detail.original_title}
                    />
                    <DescriptionItem
                        title={'Over View'}
                        content={detail.overview}
                    />
                    <DescriptionItem
                        title={'Popularity'}
                        content={detail.popularity}
                    />
                    <DescriptionItem
                        title={'Vote Average'}
                        content={detail.vote_average}
                    />
                    <DescriptionItem
                        title={'Vote Count'}
                        content={detail.vote_count}
                    />
                </View>
            </ScrollView>
        );
    }

}

