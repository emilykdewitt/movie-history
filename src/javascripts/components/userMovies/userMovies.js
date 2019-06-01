import userMoviesData from '../../helpers/data/userMoviesData';

const getMoviesData = () => {
  userMoviesData.getUserMovies()
    .then((results) => {
      console.error(results);
    })
    .catch(err => console.error('no userMovie results', err));
};

export default { getMoviesData };
