
import { GameAPI } from './gameAPI.js';
import { GameUI } from './gameUI.js';

// Initialize the app
const apiKey = '2cd92b715bmsh385c08d02fe8224p1ffddajsn11b658298bec';
const gameAPI = new GameAPI(apiKey);
const gameUI = new GameUI(gameAPI);

// Load initial category
gameUI.displayGames();
