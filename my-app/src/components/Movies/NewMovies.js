import React, { useRef } from 'react';

const NewMovie = (props) => {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" id="title" className="form-control" ref={titleRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="optext" className="form-label">
            Opening Text
          </label>
          <input type="text" id="optext" className="form-control" ref={openingTextRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Release Date
          </label>
          <input type="number" id="date" className="form-control" ref={releaseDateRef} />
        </div>
        <button className="btn btn-primary">Add new Movie</button>
      </form>
    </div>
  );
};

export default NewMovie;
