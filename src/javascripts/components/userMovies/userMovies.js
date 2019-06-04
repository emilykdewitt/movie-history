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

const addStarRating = (e) => {
  const divWithStars = e.target.closest('div').id;
  console.error(divWithStars);
  const starChildren = divWithStars.children;
  for (let i = 0; i < starChildren.length; i += 1) {
    starChildren[i].classList.add('yellow');
  }
};

const addEvents = () => {
  const removeFromWatchListBtns = document.getElementsByClassName('deleteFromWatchList');
  for (let i = 0; i < removeFromWatchListBtns.length; i += 1) {
    removeFromWatchListBtns[i].addEventListener('click', removeFromUserMovieList);
  }
  const starRatingButtons = document.getElementsByClassName('starDiv');
  for (let i = 0; i < starRatingButtons.length; i += 1) {
    starRatingButtons[i].addEventListener('click', addStarRating);
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
    domString += `<div id="${movie.id}" class="starDiv">`;
    domString += `<div class="rating d-flex flex-wrap text-white mt-2">
                    <span id="star1" class="star material-icons mx-1" data-value="1">star_border</span>
                    <span id="star2" class="star material-icons mx-1" data-value="2">star_border</span>
                    <span id="star3" class="star material-icons mx-1" data-value="3">star_border</span>
                    <span id="star4" class="star material-icons mx-1" data-value="4">star_border</span>
                    <span id="star5" class="star material-icons mx-1" data-value="5">star_border</span>
                  </div>`;
    domString += '</div>';
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
