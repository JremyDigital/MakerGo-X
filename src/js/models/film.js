export class Film {
    static allFilms = [];
    constructor(title, genre, description) {
        this.title = title;
        this.genre = genre;
        this.description = description;
        Film.allFilms.push(this);
    }
}
