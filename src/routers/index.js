import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import TodoList from 'src/scenes/todolist';
import Movie from 'src/scenes/movie';
import MovieDetail from 'src/scenes/detailmovie';
import SearchMovie from 'src/scenes/searchmovie';


const StackMovie = createStackNavigator({
        Movie:{
            screen:Movie
        },
        MovieDetail:{
            screen:MovieDetail
        },
        SearchMovie:{
            screen:SearchMovie
        }

    },
    {
        headerMode: 'none',
    }
);
const AppRouter = createSwitchNavigator({
        TodoList,
        StackMovie,
    },
    {
        headerMode: 'none',
    }
);



export const AppContainer = createAppContainer(AppRouter);
