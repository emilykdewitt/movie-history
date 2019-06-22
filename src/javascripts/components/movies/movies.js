import firebase from 'firebase/app';
import util from '../../helpers/util';
import moviesData from '../../helpers/data/moviesData';
import userMoviesData from '../../helpers/data/userMoviesData';
import 'firebase/auth';

const addToUserMovieList = (e) => {
  e.preventDefault();
  const movieToAddId = e.target.closest('div').id;
  const addButtonToHide = document.getElementById(movieToAddId).getElementsByClassName('addBtn')[0];
  const deleteButtonToShow = document.getElementById(movieToAddId).getElementsByClassName('deleteBtn')[0];
  addButtonToHide.classList.add('hide');
  deleteButtonToShow.classList.remove('hide');
  const userMovie = {
    movieId: movieToAddId,
    isWatched: false,
    userRating: 0,
    uid: firebase.auth().currentUser.uid,
    id: 'who knows',
  };
  console.error(userMovie);
  userMoviesData.addNewUserMovie(userMovie);
  userMoviesData.getUserMoviesData();
};

const addEvents = () => {
  const addButtons = document.getElementsByClassName('addBtn');
  for (let i = 0; i < addButtons.length; i += 1) {
    addButtons[i].addEventListener('click', addToUserMovieList);
  }
};

const movieStringBuilder = () => {
  moviesData.getMovies().then((movies) => {
    let domString = '';
    domString += '<div class="row">';
    movies.forEach((movie) => {
      domString += '<div class="col col-lg-2 col-md-4 col-sm-6">';
      domString += `<div class="card text-center" id="${movie.id}">`;
      domString += `<h4>${movie.title}</h4>`;
      domString += `<p>Rating: ${movie.MPAARating}</p>`;
      domString += `<img class="moviePhoto" src="${movie.imageUrl}" />`;
      domString += `<button class="addBtn" id="${movie.id}"><i class="fas fa-plus-square fa-2x addToWatchListBtn"></i></button>`;
      domString += `<button class="deleteBtn hide" id="${movie.id}"><i class="fas fa-check-square fa-2x removeFromWatchListBtn"></i></button>`;
      domString += '</div>';
      domString += '</div>';
    });
    domString += '</div>';
    util.printToDom('movies', domString);
    addEvents();
  })
    .catch(err => console.error('could not get movies', err));
};

export default { movieStringBuilder };
