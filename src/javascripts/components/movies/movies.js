import util from '../../helpers/util';
import moviesData from '../../helpers/data/moviesData';

const movieStringBuilder = () => {
  moviesData.getMovies().then((movies) => {
    console.error(movies);
    let domString = '';
    domString += '<div class="row">';
    movies.forEach((movie) => {
      domString += '<div class="col col-lg-3 col-md-6 col-sm-12">';
      domString += `<div class="card text-center" id="${movie.id}">`;
      domString += `<h4>${movie.title}</h4>`;
      domString += `<p>Rating: ${movie.MPAARating}</p>`;
      domString += `<img class="moviePhoto" src="${movie.imageUrl}" />`;
      domString += `<button class="btn btn-primary addToWatchListBtn" id="${movie.id}">Add to watch list</button>`;
      domString += '</div>';
      domString += '</div>';
    });
    domString += '</div>';
    util.printToDom('movies', domString);
  }).catch(err => console.error('could not get movies', err));
};

export default { movieStringBuilder };
