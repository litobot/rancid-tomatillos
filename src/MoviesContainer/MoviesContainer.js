import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';


function MoviesContainer({ movies }) {
  return (
    <div className='movies-container'>
        {movies.map((movie) => (
          <MoviePoster
            key={ movie.id }
            posterId={movie.id}
            posterPath={ movie.poster_path } 
            voteCount={ movie.vote_count }
          />
        ))}
    </div>
  );
}
  
export default MoviesContainer;