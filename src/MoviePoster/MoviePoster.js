import './MoviePoster.css';
import upVote from '../icons/upvote.png'
import downVote from '../icons/downvote.png'
import { useState } from 'react';

const MoviePoster = ({ posterPath , voteCount, incrementVote, decrementVote, toMovieDetails, posterId }) => {
  const [votes, setVotes] = useState(voteCount)
  
  function adjustVote(vertical){
   fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${posterId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vote_direction: vertical })
    }) 

  }
  function incrementVote(){
    setVotes(votes + 1)
    adjustVote("up")
  }

  function decrementVote(){
    setVotes(votes - 1)
    adjustVote("down")
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