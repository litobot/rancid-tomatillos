import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import homeButton from '../icons/home.png';
import search from '../icons/search.png';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [posters, setPosters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMoviePosters = () => {
    fetch("https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies")
      .then(response => response.json())
      .then(posterData => {
        setPosters([...posterData]);
        setSearchResults(posterData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMoviePosters();
  }, []);
  
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredPosters = posters.filter((poster) => 
      poster.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredPosters);
  }

  return (
    <div>
      <div className='header'>
        <h1>rancid tomatillos</h1>
        <Routes>
          <Route 
            path='/:movieId' 
            element={
              <Link to={'/'}>
                <img 
                src={homeButton} 
                className='home-button' 
                alt='Home'
              />
              </Link>
            } 
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <div className='search-container'>
                <img src={search} alt="search-icon" />
                <input
                  type='text'
                  placeholder='Search Movies...'
                  className='search-bar'
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            }
          />
        </Routes>
      </div>
      <Routes>
        <Route path='/' element={<MoviesContainer movies={searchResults} />} />
        <Route path='/:movieId' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
