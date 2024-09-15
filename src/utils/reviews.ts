import { GameReview } from "../components/reviews/types";

export const calculateAverageRating = (review: GameReview): any => {
  const ratings = [review.graphics, review.gameplay, review.story].filter((r) => r !== undefined);
  if (ratings.length === 0) return null; // No ratings provided
  const sum = ratings.reduce((acc, val) => acc + (val ?? 0), 0);
  return sum / ratings.length;
};

export const formatReviewDate = (timestamp: string): string => {
  const date = new Date(timestamp);

  // Formatting the absolute date (e.g., "13th Sep 2024")
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  // Calculating the relative time (e.g., "2 days ago")
  const now = Date.now();
  const diffInSeconds = Math.floor((now - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  let relativeTime = '';
  if (diffInDays > 0) {
    relativeTime = `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else if (diffInHours > 0) {
    relativeTime = `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInMinutes > 0) {
    relativeTime = `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } else {
    relativeTime = 'just now';
  }

  return `Reviewed ${relativeTime} - ${formattedDate}`;
};
