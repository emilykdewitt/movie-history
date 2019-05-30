import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getMovies = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((results) => {
      const moviesResults = results.data;
      const movies = [];
      Object.keys(moviesResults).forEach((movieId) => {
        moviesResults[movieId].id = movieId;
        movies.push(moviesResults[movieId]);
      });
      resolve(movies);
    })
    .catch(err => reject(err));
});

export default { getMovies };
