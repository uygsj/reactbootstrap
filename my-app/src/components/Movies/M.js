import React from "react";

const Movie = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => props.onDeleteMovie(props.movieId)}>Delete</button>
    </li>
  );
};

export default Movie;
