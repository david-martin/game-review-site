import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/reviews.css'; // Styles for pixelated table and retro hover effect
import { calculateAverageRating } from './utils/reviews';
import reviews from './data/reviews';
import Stars from './components/reviews/stars';
import NavBar from './components/navbar/navbar';

const GameReviewPage: React.FC = () => {
  const { game_id } = useParams<{ game_id: string }>(); // Ensure game_id is a string

  const gameReview = reviews.find(review => review.id === game_id);

  if (!gameReview) {
    return <h2>Review not found</h2>;
  }

  return (
    <div className="page-container">
      <NavBar />
      <div className="review-container">
        <h1>{gameReview.title} - {gameReview.platform}</h1>

        {gameReview.unrated ? (
          <p><span className="unrated-label" > Unrated </span></p>
        ) : (
          <>
            <p>Graphics: <Stars rating={gameReview.graphics}/></p>
            <p>Gameplay: <Stars rating={gameReview.gameplay}/></p>
            <p>Story: <Stars rating={gameReview.story}/></p>
            <p>Overall: <Stars rating={calculateAverageRating(gameReview)}/></p>
          </>
        )}

        <p>{gameReview.comments ? gameReview.comments : 'Overall, a retro classic!'}</p>
      </div>
    </div >
  );
};

export default GameReviewPage;
