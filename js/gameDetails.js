export class GameDetails {
    constructor(api) {
        this.api = api;
        this.modal = document.querySelector('.my-modal');
        this.closeButton = document.querySelector('#close');
        this.initEventListeners();
    }

    initEventListeners() {
        this.closeButton.addEventListener('click', () => {
            this.modal.classList.add('d-none');
          this.container.classList.remove('d-none')

        });
    }

    async displayGameDetails(id) {
        const game = await this.api.fetchGameDetails(id);
        if (game) {
            this.modal.querySelector('img').src = game.thumbnail;
            this.modal.querySelector('h4').innerText = `Title: ${game.title}`;
            this.modal.querySelector('#platform').innerText = game.platform;
            this.modal.querySelector('#status').innerText = game.status;
            this.modal.querySelector('p').innerText = game.description.split(" ", 90).join(" ");
            this.modal.querySelector('#gameurl').setAttribute('href',game.game_url)
            this.modal.classList.remove('d-none');
            this.container.classList.add('d-none')
        }
    }
}
