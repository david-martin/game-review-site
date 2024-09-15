import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/reviews.css'; // Styles for pixelated table and retro hover effect
import reviews, { GameReview } from './reviews'; // Import the reviews

const GameReviewPage: React.FC = () => {
  const { game_id } = useParams<{ game_id: string }>(); // Ensure game_id is a string

  const gameReview = reviews.find(review => review.id === game_id);

  if (!gameReview) {
    return <h2>Review not found</h2>;
  }

  return (
    <div className="review-container">
      <h1>{gameReview.title} - {gameReview.platform}</h1>

      {gameReview.unrated ? (
        <p><strong>Unrated</strong></p>
      ) : (
        <>
          <p>Graphics: {renderStars(gameReview.graphics ?? 0)}</p>
          <p>Gameplay: {renderStars(gameReview.gameplay ?? 0)}</p>
          <p>Story: {renderStars(gameReview.story ?? 0)}</p>
        </>
      )}

      <p>{gameReview.comments ? gameReview.comments : 'Overall, a retro classic!'}</p>
    </div>
  );
};

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<span key={i} className={i < rating ? 'star full' : 'star empty'}>★</span>);
  }
  return stars;
};

export default GameReviewPage;
