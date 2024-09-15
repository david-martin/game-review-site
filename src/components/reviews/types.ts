// Define a type for both rated and unrated games
export type GameReview = {
  id: string;               // Unique identifier for the game review
  title: string;
  platform: string;
  graphics?: number;        // Optional for unrated games
  gameplay?: number;        // Optional for unrated games
  story?: number;           // Optional for unrated games
  unrated?: boolean;        // To signify that the game is unrated
  comments?: string;        // Optional comments for any review
  timestamp: string;        // ISO 8601 timestamp for the review (e.g., "2024-11-15T00:00:00Z")
};