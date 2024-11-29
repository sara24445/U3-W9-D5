import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const CGallery = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = '56c3a2f3'; 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
        
        // Assicurati che la risposta sia corretta
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
        } else {
          setError(response.data.Error);
        }
      } catch (error) {
        setError("Failed to fetch movies");
        console.error('Failed to fetch movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [title, API_KEY]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className="my-5">
      <h2 className="mb-4">{title} Movies <small>({movies.length} found)</small></h2>
      <div className="d-flex flex-wrap justify-content-between">
        {movies && movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default CGallery;