import { Film } from "../models/film.js";
import { generateOptions } from "../ui/optionsUI.js";

export const handleBasicForm = () => {
    const form = document.getElementById("basic-form");
    const title = document.getElementById("film-title");
    const genre = document.getElementById("film-genre");
    const description = document.getElementById("film-description");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const sequenceBtn = document.getElementById("sequence-btn");
        const sceneBtn = document.getElementById("scene-btn");

        if (!sequenceBtn && !sceneBtn) {
            generateOptions();

            const usersFilm = new Film(title.value, genre.value, description.value);
            console.log(usersFilm);
        }
    });
};
