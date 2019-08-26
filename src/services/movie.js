import Api from 'src/services/api';
import { API_MOVIE_ENDPOINT, MOVIE_API_KEY } from 'src/util/Config';
class MovieApi {
    getFeatureMovie(page=1){
        return Api.get(`${API_MOVIE_ENDPOINT}/3/list/${page}?api_key=${MOVIE_API_KEY}`);
    }
}

export default new MovieApi();
