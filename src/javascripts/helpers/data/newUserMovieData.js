import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewUserMovie = movieObject => axios.post(`${firebaseUrl}/userMovies.json`, movieObject);

export default { addNewUserMovie };
