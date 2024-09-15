// Stars.tsx
import React from 'react';
import './stars.css';
import { StarIcon } from '@patternfly/react-icons';

interface StarsProps {
  rating?: number | undefined | null;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
  // If rating is undefined or null, return "Unrated"
  if (rating == null) {
    return <span className="stars unrated-label">Unrated</span>;
  }

  // Otherwise, render the stars
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <StarIcon
      key={i}
      className={`star-icon ${i < rating ? 'full' : 'empty'}`}
    />
    );
  }

  return <span className="stars">{stars}</span>; // Add the "stars" class
};

export default Stars;
