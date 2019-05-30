import newMovieData from '../../helpers/data/newMovieData';

const createNewMovie = (e) => {
  e.preventDefault();
  const newMovie = {
    title: document.getElementById('movieTitleInput').value,
    MPAARating: document.getElementById('MPAARatingInput').value,
    imageUrl: document.getElementById('imageUrlInput').value,
  };
  newMovieData.addNewMovie(newMovie)
    .then(() => {
      document.getElementById('movies').classList.remove('hide');
      document.getElementById('openForm').classList.remove('hide');
      document.getElementById('addMovieForm').classList.add('hide');
      document.getElementById('movieTitleInput').value = '';
      document.getElementById('MPAARatingInput').value = '';
      document.getElementById('imageUrlInput').value = '';
    })
    .catch(err => console.error('no new movie for you', err));
};

const newMovieButton = () => {
  document.getElementById('addMovieForm').classList.remove('hide');
  document.getElementById('openForm').classList.add('hide');
  document.getElementById('movies').classList.add('hide');
  document.getElementById('saveNewMovie').addEventListener('click', createNewMovie);
};

const showMovieForm = () => {
  document.getElementById('openAddMovieForm').addEventListener('click', newMovieButton);
};

export default { showMovieForm };
