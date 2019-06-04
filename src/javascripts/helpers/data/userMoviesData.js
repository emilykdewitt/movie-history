import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserMoviesData = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovies.json?orderBy="uid"&equalTo="${uid}"`)
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

const addNewUserMovie = movieObject => axios.post(`${firebaseUrl}/userMovies.json`, movieObject);

const deleteUserMovie = movieId => axios.delete(`${firebaseUrl}/userMovies/${movieId}.json`);

export default { getUserMoviesData, addNewUserMovie, deleteUserMovie };
