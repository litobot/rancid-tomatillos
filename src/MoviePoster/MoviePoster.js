import './MoviePoster.css';
import upVote from '../icons/upvote.png'
import downVote from '../icons/downvote.png'
import { useState } from 'react';
import Header from '../Header/Header';

const MoviePoster = ({ posterPath , voteCount, incrementVote, decrementVote, toMovieDetails }) => {
  const [votes, setVotes] = useState(voteCount)

  function incrementVote(){
    setVotes(votes + 1)
  }

  function decrementVote(){
    setVotes(votes - 1)
  }

  return (
    <div className="movie-card">
      <img src={ posterPath } onClick={ toMovieDetails } className="movie-poster" />
      <div className='vote-section'>
        <img src={ upVote } onClick={ incrementVote } />
        <p className='vote-count'>{votes}</p>
        <img src={ downVote } onClick={ decrementVote } />
      </div>
    </div>
  );
};
export default MoviePoster;