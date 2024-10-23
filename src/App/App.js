import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import homeButton from '../icons/home.png';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ErrorCode from '../ErrorCode/ErrorCode'

function App() {
  const [posters, setPosters] = useState([]);
  const navigate = useNavigate();

  const fetchMoviePosters = () => {
    fetch("https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies")
      .then(response => response.json())
      .then(posterData => setPosters([...posterData]));
  };

  useEffect(() => {
    fetchMoviePosters();
  }, []);
  
  return (
    <div>
      <div className="header">
        <h1>rancid tomatillos</h1>
        <Routes>
          <Route 
            path='/:movieId' 
            element={
              <img 
                src={homeButton} 
                onClick={() => navigate('/')} 
                className="home-button" 
                alt="Home" 
              />
            } 
          />
        </Routes>
      </div>
      <Routes>
        <Route path='/' element={<MoviesContainer movies={posters} />} />
        <Route path='/:movieId([0-9]+1)' element={<MovieDetails />} />
        <Route path='/*' element={<ErrorCode />} />
      </Routes>
    </div>
  );
}

export default App;
