import React from 'react';

const CMovieCard = ({ movie }) => {
  return (
    <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Details
        </a>
      </div>
    </div>
  );
};

export default CMovieCard;