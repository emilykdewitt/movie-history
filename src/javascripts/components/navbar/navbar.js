import firebase from 'firebase/app';
import 'firebase/auth';

import userMovies from '../userMovies/userMovies';

const navbarEvents = () => {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', (e) => {
      if (e.target.id === 'navbar-button-logout') {
        firebase.auth().signOut();
      } else if (e.target.id === 'navbar-button-watchlist') {
        document.getElementById('userMovies').classList.remove('hide');
        document.getElementById('movies').classList.add('hide');
        document.getElementById('addNewMovieFormAll').style.display = 'none';
        userMovies.getData(firebase.auth().currentUser.uid);
      } else if (e.target.id === 'navbar-button-movies') {
        document.getElementById('userMovies').classList.add('hide');
        document.getElementById('movies').classList.remove('hide');
        document.getElementById('addNewMovieFormAll').style.display = 'block';
      }
    });
  }
};

export default { navbarEvents };
