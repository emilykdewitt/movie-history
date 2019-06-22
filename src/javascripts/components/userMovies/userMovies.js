import userMoviesData from '../../helpers/data/userMoviesData';
import util from '../../helpers/util';
// import movies from '../movies/movies';
import moviesData from '../../helpers/data/moviesData';
import SMASH from '../../helpers/SMASH';

const removeFromUserMovieList = (e) => {
  const movieToRemoveId = e.target.closest('div').id;
  console.error(movieToRemoveId);
  userMoviesData.deleteUserMovie(movieToRemoveId);
  userMoviesData.getUserMoviesData();
};

const addEvents = () => {
  const removeFromWatchListBtns = document.getElementsByClassName('deleteFromWatchList');
  for (let i = 0; i < removeFromWatchListBtns.length; i += 1) {
    removeFromWatchListBtns[i].addEventListener('click', removeFromUserMovieList);
  }
};

const userMovieStringBuilder = (movieList) => {
  console.error('string builder', movieList);
  let domString = '';
  domString += '<div class="row">';
  movieList.forEach((movie) => {
    domString += '<div class="col col-lg-2 col-md-4 col-sm-6">';
    domString += `<div class="card text-center" id="${movie.id}">`;
    domString += `<h4>${movie.title}</h4>`;
    domString += `<p>Rating: ${movie.MPAARating}</p>`;
    domString += `<img class="moviePhoto" src="${movie.imageUrl}" />`;
    domString += `<button class="deleteFromWatchList" id="${movie.id}"><i class="fas fa-minus-square fa-2x removeFromWatchListBtn"></i></button>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('userMovies', domString);
  addEvents();
};

const getData = (uid) => {
  console.error(uid);
  userMoviesData.getUserMoviesData(uid)
    .then((userMovies) => {
      moviesData.getMovies()
        .then((movies) => {
          const finalMovies = SMASH.userMoviesWithDetails(movies, userMovies);
          userMovieStringBuilder(finalMovies);
        });
    })
    .catch(err => console.error('no userMovie results', err));
};

export default { getData };
