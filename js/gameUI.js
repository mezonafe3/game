import { GameDetails } from './gameDetails.js';

export class GameUI {
    constructor(api) {
        this.api = api;
        this.row = document.querySelector('.row');
        this.modal = new GameDetails(this.api);
        this.category = 'shooter';
        this.loader = document.querySelector('.loader');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.initEventListeners();
    }

    initEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navLinks.forEach(link => link.classList.remove('active'));
                e.target.classList.add('active');
                this.category = e.target.getAttribute('data-category');
                this.displayGames();
            });
        });

        this.row.addEventListener('click', (e) => {
            if (e.target.closest('.card')) {
                const gameId = e.target.closest('.card').getAttribute('data-id');
                this.modal.displayGameDetails(gameId);
            }
        });
    }

    async displayGames() {
        this.showLoader();
        const games = await this.api.fetchGames(this.category);
        this.hideLoader();
        let gameCards = '';

        games.forEach(game => {
            gameCards += `
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="card bg-dark text-light" style="width: 18rem;" data-id="${game.id}">
                        <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">${game.title}</h5>
                                <button type="button" class="btn btn-primary btn-sm m-1">Free</button>
                            </div>
                            <p class="card-text">${game.short_description.split(" ", 9).join(" ")}.</p>
                        </div>
                        <div class="card-footer justify-content-between d-flex">
                            <span class="badge btn rounded-pill text-bg-secondary">${game.genre}</span>
                            <span class="badge rounded-pill text-bg-secondary">${game.platform}</span>
                        </div>
                    </div>
                </div>`;
        });

        this.row.innerHTML = gameCards;
    }

    showLoader() {
        this.loader.classList.remove('d-none');
    }

    hideLoader() {
        this.loader.classList.add('d-none');
    }
}
