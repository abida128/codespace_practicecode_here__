// Define your API key and base URL
const tmdbKey = "YOUR_TMDB_API_KEY";
const tmdbBaseUrl = "https://api.themoviedb.org/3/";
const url = "https://api.themoviedb.org/3/genre/movie/list";
const queryParams = "?api_key=" + tmdbKey;

// Function to get genres
async function getGenres() {
  const genreRequestEndpoint = "genre/movie/list";
  const requestParams = "api_key=" + tmdbKey;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + "?" + requestParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to get movies based on genre
async function getMovies() {
  const discoverMovieEndpoint = "discover/movie";
  const selectedGenre = getSelectedGenre(); // assuming you have a function to get selected genre
  const requestParams = `api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}?${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      console.log(movies);
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to get movie details
async function getMovieInfo(movie) {
  const movieEndpoint = `movie/${movie.id}`;
  const requestParams = `api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}?${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const movieInfo = await response.json();
      console.log(movieInfo);
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to show a random movie
async function showRandomMovie() {
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
}

// Call the function to show a random movie
showRandomMovie();
