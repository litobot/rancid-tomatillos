import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

function MoviesContainer({ movies, incrementVote, decrementVote}) {
  return (
      <div className='movies-container'>
        {movies.map((movie)=> (
          <MoviePoster
            key={movie.id}
            posterPath={movie.poster_path} 
            voteCount={movie.vote_count}
            incrementVote={incrementVote}
            decrementVote={decrementVote}
            />
        ))}
      </div>
  );
}
  
export default MoviesContainer;