import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import TodoList from 'src/scenes/todolist';
import Movie from 'src/scenes/movie';
import MovieDetail from 'src/scenes/detailmovie';

const StackMovie = createStackNavigator({
        Movie:{
            screen:Movie
        },
        MovieDetail:{
            screen:MovieDetail
        },

    },
    {
        headerMode: 'none',
    }
);
const AppRouter = createSwitchNavigator({
        // MovieDetail,
        TodoList,
        StackMovie

    },
    {
        headerMode: 'none',
    }
);



export const AppContainer = createAppContainer(AppRouter);
