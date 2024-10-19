import './MovieDetails.css';

function MovieDetails({details}) {
  return (
    <div>
      <div className='movie-details'>
        <div className='image-container'>
          <img src={ details.backdrop_path } alt={details.title} />
        </div>

        <h2>{details.title}</h2>

        <div className="genre-button-container">
          {details.genre_ids.map((genre, index) => (
            <button key={ index } className="genre-button">
              {genre}
            </button>
          ))}
        </div>

        <p>{ details.overview }</p>
      </div>
    </div>
  );
}

export default MovieDetails;