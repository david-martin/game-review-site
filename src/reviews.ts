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
    timestamp: number;        // Timestamp for the review
  };
  
  // List of reviews
  const reviews: GameReview[] = [
    { id: 'c64-3d-pinball', title: '3D Pinball', platform: 'C64', graphics: 4, gameplay: 3, story: 2, timestamp: 1629180000000 },
    { id: 'nes-super-mario', title: 'Super Mario Bros', platform: 'NES', graphics: 5, gameplay: 5, story: 4, timestamp: 1629266400000 },
    { id: 'snes-chrono-trigger', title: 'Chrono Trigger', platform: 'SNES', graphics: 5, gameplay: 5, story: 5, timestamp: 1629352800000 },
    { id: 'unrated-game-example', title: 'Some Unfinished Game', platform: 'PS4', unrated: true, comments: "Played a bit, but didn't finish yet.", timestamp: 1629439200000 },
  ];
  
  export default reviews;
  