import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./MovieList";
import LoadingMovie from "./LoadingMovie"
import NewMovie from "./NewMovies";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
      }));
      setMovies(transformedMovies);
    } catch (err) {
      setError('Something went wrong while fetching movies.');
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  } else if (isLoading) {
    content = <LoadingMovie/>; // Show a loading indicator (you can create Shimmer component)
  } else if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <NewMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default Movies;
