import './MovieDetails.css';

function MovieDetails({details}) {
  console.log(details)
  return (
      <div className='movie-details'>
        <img src={ details.backdrop_path } />
          <h2>{details.title}</h2>
          {details.genre_ids.map((genre, index) => (
            <button key={ index }className="genre-button">
              {genre}
            </button>
          ))}
        <p>{ details.overview }</p>
      </div>
  );
}
export default MovieDetails;