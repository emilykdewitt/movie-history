import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserMovies = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovies.json`)
    .then((results) => {
      const userMoviesResults = results.data;
      const userMovies = [];
      Object.keys(userMoviesResults).forEach((movieId) => {
        userMoviesResults[movieId].id = movieId;
        userMovies.push(userMoviesResults[movieId]);
      });
      resolve(userMovies);
    })
    .catch(err => reject(err));
});

export default { getUserMovies };
