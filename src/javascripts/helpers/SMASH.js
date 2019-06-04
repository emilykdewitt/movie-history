// A function that takes in the id of the movie that is being clicked (e.g. -LgUlcUF6zA0nGPQzivk)
// It finds that object in firebase using the id
// It uses that id to find the necessary info (name, url, rating, image)
// And then assigns them as new values to the userMovie object in firebase

const userMoviesWithDetails = (movies, userMovies) => userMovies.map((um) => {
  const movie = movies.find(m => um.movieId === m.id);
  return Object.assign({}, movie, um);
});

export default { userMoviesWithDetails };
