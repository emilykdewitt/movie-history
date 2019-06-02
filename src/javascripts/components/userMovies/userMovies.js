import userMoviesData from '../../helpers/data/userMoviesData';
import util from '../../helpers/util';

const userMovieStringBuilder = () => {
  userMoviesData.getUserMoviesData()
    .then((userMovies) => {
      console.error(userMovies);
      let domString = '';
      domString += '<div class="row">';
      userMovies.forEach((userMovie) => {
        domString += '<div class="col col-lg-2 col-md-4 col-sm-6">';
        domString += `<div class="card text-center" id="${userMovie.id}">`;
        domString += `<p>Is watched? ${userMovie.isWatched}`;
        domString += `<p>${userMovie.movieId}</p>`;
        domString += `<p>${userMovie.uid}</p>`;
        domString += `<p>${userMovie.userRating}</p>`;
        domString += `<button class="deleteBtn hide" id="${userMovie.id}"><i class="fas fa-minus-square fa-2x removeFromWatchListBtn"></i></button>`;
        domString += '</div>';
        domString += '</div>';
      });
      util.printToDom('userMovies', domString);
    })
    .catch(err => console.error('no userMovie results', err));
};

export default { userMovieStringBuilder };
