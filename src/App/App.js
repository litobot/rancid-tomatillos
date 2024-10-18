import './App.css';
import searchIcon from '../icons/search.png';
import moviePosters from '../data/movie_posters';
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import MovieDetails from '../MovieDetails/MovieDetails'
import movieDetails from '../data/movie_details';
import homeButton from '../icons/home.png'
// Example imports (for later):
import { useState, useEffect } from 'react';



function App() {
const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToMovies = () => {
    setSelectedMovie(null);
  };

  return (
    <main className='App'>
      <div className='header'>
        <h1>rancid tomatillos</h1>
        {selectedMovie && (
          <img 
            src={homeButton} 
            className='home-button' 
            alt="Home" 
            onClick={handleBackToMovies}
          />
        )}
      </div>
          {selectedMovie ? (
        <MovieDetails 
          details={movieDetails} 
        />
      ) : (
        <MoviesContainer 
          movies={moviePosters} 
          onMovieSelect={handleMovieSelect} 
        />
      )}
    </main>
  );
}

export default App;
