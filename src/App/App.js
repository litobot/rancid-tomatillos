import './App.css';
import searchIcon from '../icons/search.png';
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import MovieDetails from '../MovieDetails/MovieDetails'
import homeButton from '../icons/home.png'
import { useState, useEffect } from 'react';



function App() {
const [selectedMovie, setSelectedMovie] = useState(null);
const [posters, setPosters] = useState([])

  const handleMovieSelect = (movie) => {
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${movie.id}`)
    .then(response => response.json())
    .then(movieDetails => {
      console.log('movieDetails', movieDetails)
      setSelectedMovie(movieDetails)
    });
  };

  const handleBackToMovies = () => {
    setSelectedMovie(null);
  };

  const fetchMoviePosters = () => {
    fetch("https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies")
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(posterData => setPosters([...posterData]))
  };
  
  useEffect(() => {
    fetchMoviePosters();
  }, []);
  
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
          details={selectedMovie} 
        />
      ) : (
        <MoviesContainer 
          movies={posters} 
          onMovieSelect={handleMovieSelect} 
        />
      )}
    </main>
  );
}

export default App;
