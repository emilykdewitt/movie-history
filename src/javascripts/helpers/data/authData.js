import firebase from 'firebase/app';
import 'firebase/auth';
import movies from '../../components/movies/movies';
import addMovie from '../../components/addMovie/addMovie';

const authDiv = document.getElementById('auth');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');
const moviesNavbar = document.getElementById('navbar-button-movies');
const moviesDiv = document.getElementById('movies');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      moviesNavbar.classList.remove('hide');
      moviesDiv.classList.remove('hide');
      movies.movieStringBuilder();
      addMovie.showMovieForm();
    } else {
      authDiv.classList.remove('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
      moviesNavbar.classList.add('hide');
      moviesDiv.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
