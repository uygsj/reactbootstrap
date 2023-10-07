import React from "react";
import Movie from "./M";

function MovieList(props) {
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          movieId={movie.id}
          onDeleteMovie={props.onDeleteMovie}
        />
      ))}
    </ul>
  );
}

export default MovieList;
