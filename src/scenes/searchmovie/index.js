import React from 'react';
import NavigationService from 'src/routers/NavigationService';
import MovieApi from 'src/services/movie';
import SearchMovieScene from 'src/scenes/searchmovie/SearchMovieScene';

export default class SearchMovie extends SearchMovieScene {
    state = {
        movies: [],
        page: 1,
        textSearchMovie: '',
        lastSearch: null,
    };

    searchMovieByName = async () => {

        const { textSearchMovie} = this.state;
        console.log('searchMovieByName',textSearchMovie,this.isTheSameSearch());
        if (!textSearchMovie.length || this.isTheSameSearch()) return;
        this.state.page=1;
        const movies = await MovieApi.searchMovie(textSearchMovie,  this.state.page);
        console.log('movies', movies);
        if (movies.results) {
            this.setState({
                movies:movies.results
            });
            this.state.lastSearch=textSearchMovie;
        }
    };
    loadMoreMovie = async () => {
        const { lastSearch} = this.state;
        if (!lastSearch.length) return;

        const movies = await MovieApi.searchMovie(lastSearch,  ++this.state.page);
        console.log('movies', movies);
        if (movies.results) {
            this.setState({
                movies:this.state.movies.concat(movies.results)
            });
        }
    };
    isTheSameSearch = () => {
        const { textSearchMovie, lastSearch } = this.state;
        return textSearchMovie.trim().toLowerCase() === lastSearch?.trim().toLowerCase();
    };

    onItemClick = (item) => {
        NavigationService.navigate('MovieDetail', { detail: item });
    };


    onHeaderButtonLeftPress = () => {
        NavigationService.navigate('TodoList');
    };


    onEndReach = () => this.loadMoreMovie();

    changeTextSearchMovieHandler = text => {
        this.setState({ textSearchMovie: text })
    }
    clearSearch=()=>{
        this.setState({textSearchMovie:''})
    }
};


