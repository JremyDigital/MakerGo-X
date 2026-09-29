export class Film {
    static allFilms = [];
    constructor(title, genre, description) {
        this.title = title;
        this.genre = genre;
        this.description = description;
        this.sequences = [];
        this.scenes = [];
        Film.allFilms.push(this);
    }
}
