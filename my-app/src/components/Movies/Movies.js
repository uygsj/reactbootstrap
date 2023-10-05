import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  async function fetchMovies() {
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

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
      setError(null);
    } catch (err) {
      setError("Something went wrong ....Retrying");
      setIsRetrying(true);

      // Retry fetching movies after 5 seconds if not canceled
      setTimeout(() => {
        if (isRetrying) {
          fetchMovies();
        }
      }, 5000);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleRetryClick = () => {
    setIsRetrying(true);
    setError(null);
    fetchMovies();
  };

  const handleCancelRetryClick = () => {
    setIsRetrying(false);
    setError("Retry canceled");
  };

  let content = <p>Found no movies.</p>;

  if (isRetrying) {
    content = (
      <div>
        <p>{error}</p>
        <button onClick={handleRetryClick}>Retry</button>
        <button onClick={handleCancelRetryClick}>Cancel</button>
      </div>
    );
  } else if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div>
      <section>
        <div>
          <button onClick={fetchMovies}>Fetch Movies</button>
        </div>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {content}
      </section>
    </div>
  );
};

export default Movies;
