import React from 'react';
import MovieScene from 'src/scenes/movie/MovieScene';
import NavigationService from 'src/routers/NavigationService';
import MovieApi from 'src/services/movie';

export default class Movie extends MovieScene {
    state = {
        movies: [],
        page: 0,
    };

    async componentDidMount() {
        await this.getMovie();
    }

    async getMovie() {
        const movie = await MovieApi.getFeatureMovie(++this.state.page);
        if (movie.items) {
            this.setState({
                movies: this.state.movies.concat(movie.items),
            });
        }
    }

    onItemClick = (item) => {
        NavigationService.navigate('MovieDetail', { detail: item });
    };

    onHeaderButtonRightPress = () => {
        console.log('SearchMovie');
        NavigationService.navigate('SearchMovie');
    };
    onHeaderButtonLeftPress = () => {
        NavigationService.navigate('TodoList');
    };


    onEndReach = () => this.getMovie()
};


