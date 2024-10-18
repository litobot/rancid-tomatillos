import './MoviePoster.css';

const MoviePoster = ({ posterPath , voteCount }) => {
  return (
    <div className="movie-card">
      <img src={posterPath} className="movie-poster" />
      <p className='vote-count'>{voteCount}</p>
    </div>
  );
};
export default MoviePoster;