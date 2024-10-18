import './App.css';
import searchIcon from '../icons/search.png';
import moviePosters from '../data/movie_posters';
import MoviesContainer from '../MoviesContainer/MoviesContainer'


// Example imports (for later):
// import { useState, useEffect } from 'react';
// import movieDetails from '../data/movie_details';


function App() {
  return (
    <main className='App'>
      <h1>rancid Tomatillos</h1>
      <MoviesContainer movies={moviePosters} />
    </main>
  );
}

export default App;
