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
/*if (isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBZnsryIn3EL7dA9W-HgnP0X6EXabzgASU'; // Replace with your API key
      } else {
        url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZnsryIn3EL7dA9W-HgnP0X6EXabzgASU'
      }
     */