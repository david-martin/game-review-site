import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/reviews.css'; // Styles for pixelated table and retro hover effect

// Define a type for rated and unrated games
type GameReview = {
  title: string;
  platform: string;
  graphics?: number;    // Optional for unrated games
  gameplay?: number;    // Optional for unrated games
  story?: number;       // Optional for unrated games
  unrated?: boolean;    // To signify the game is unrated
  comments?: string;    // Optional comments for any review
};

const GameReviewPage: React.FC = () => {
  const { game_id } = useParams<{ game_id: string }>(); // Ensure game_id is a string

  const reviews: Record<string, GameReview> = {
    'c64-3d-pinball': { title: '3D Pinball', platform: 'C64', graphics: 4, gameplay: 3, story: 2 },
    'nes-super-mario': { title: 'Super Mario Bros', platform: 'NES', graphics: 5, gameplay: 5, story: 4 },
    'snes-chrono-trigger': { title: 'Chrono Trigger', platform: 'SNES', graphics: 5, gameplay: 5, story: 5 },
    'unrated-game-example': { title: 'Some Unfinished Game', platform: 'PS4', unrated: true, comments: "Played a bit, but didn't finish yet." },
  };
  
  if (!game_id || !(game_id in reviews)) {
    return <h2>Review not found</h2>;
  }

  const gameReview = reviews[game_id as keyof typeof reviews];

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
