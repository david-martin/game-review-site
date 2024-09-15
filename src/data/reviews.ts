import { GameReview } from "../components/reviews/types";

// List of reviews
export const reviews: GameReview[] = [
  { id: 'c64-3d-pinball', title: '3D Pinball', platform: 'C64', graphics: 4, gameplay: 3, story: 2, timestamp: '2021-08-17T12:00:00Z' },
  { id: 'nes-super-mario', title: 'Super Mario Bros', platform: 'NES', graphics: 5, gameplay: 5, story: 4, timestamp: '2021-08-18T12:00:00Z' },
  { id: 'snes-chrono-trigger', title: 'Chrono Trigger', platform: 'SNES', graphics: 5, gameplay: 5, story: 5, timestamp: '2021-08-19T12:00:00Z' },
  { id: 'unrated-game-example', title: 'Some Unfinished Game', platform: 'PS4', unrated: true, comments: "Played a bit, but didn't finish yet.", timestamp: '2021-08-20T12:00:00Z' },
];

export default reviews;