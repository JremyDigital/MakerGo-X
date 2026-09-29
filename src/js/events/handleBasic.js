import { Film } from "../models/film.js";
import { generateOptions } from "../ui/optionsUI.js";
import { handleSequence } from "./handleSeq.js";
import { handleScene } from "./handleScene.js";
import { clearInputValues } from "../utils/domUtils.js";

export const handleBasicForm = () => {
    const form = document.getElementById("basic-form");
    const title = document.getElementById("film-title");
    const genre = document.getElementById("film-genre");
    const description = document.getElementById("film-description");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const usersFilm = new Film(title.value, genre.value, description.value);
        console.log(Film.allFilms);

        clearInputValues(title, genre, description);

        const sequenceBtn = document.getElementById("sequence-btn");
        const sceneBtn = document.getElementById("scene-btn");

        if (!sequenceBtn && !sceneBtn) {
            generateOptions();
            handleSequence();
            handleScene();
        }
    });
};
