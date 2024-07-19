export class GameAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
    }

    async fetchGames(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': this.apiHost
            }
        };

        try {
            const response = await fetch(url, options);
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async fetchGameDetails(id) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': this.apiHost
            }
        };

        try {
            const response = await fetch(url, options);
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
