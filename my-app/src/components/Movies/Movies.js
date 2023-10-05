import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import LoadingMovie from "./LoadingMovie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  

  async function fetchMovieHandler() {
    const response = await fetch('https://swapi.dev/api/films/');

    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });

    setMovies(transformedMovies);
  }

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  return  movies.length===0 ? (<LoadingMovie/>) : (
    <div>
      <section>
        <div>
          <button onClick={fetchMovieHandler}>Fetch Movies</button>
        </div>
        <MovieList movies={movies} />
      </section>
    </div>
  );
}

export default Movies;
