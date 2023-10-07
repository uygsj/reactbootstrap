import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://react-http-1a3d9-default-rtdb.firebaseio.com/movies.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    try {
      const response = await fetch('https://react-http-1a3d9-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Adding movie failed');
      }

      // After adding the movie, you can fetch the updated list of movies
      // to refresh the UI or simply add the new movie to the existing state.
      const data = await response.json();
      const updatedMovies = [...movies, { ...movie, id: data.name }];
      setMovies(updatedMovies);
    } catch (error) {
      setError(error.message);
    }
  }

  async function deleteMovieHandler(id) {
    try {
      const response = await fetch(`https://react-http-1a3d9-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Deleting movie failed');
      }

      // After successfully deleting the movie, update the UI by removing the deleted movie from the state.
      const updatedMovies = movies.filter(movie => movie.id !== id);
      setMovies(updatedMovies);
    } catch (error) {
      setError(error.message);
    }
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} onDeleteMovie={deleteMovieHandler} />;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
    <section>
    <AddMovie onAddMovie={addMovieHandler} />
    <button className="btn btn-primary"  onClick={fetchMoviesHandler}>Fetch Movies</button>
  </section>
  
  <section>{content}</section>
  </>
  );
}

export default Movies;
