import { generateSceneForm } from "../ui/sceneFormUI.js";
import { Scene } from "../models/scene.js";
import { clearInputValues } from "../utils/domUtils.js";

export const handleScene = () => {
    const sceneBtn = document.getElementById("scene-btn");

    if (sceneBtn) {
        sceneBtn.addEventListener("click", () => {
            const form = generateSceneForm();

            form.submitSceneBtn.addEventListener("click", () => {
                const usersScene = new Scene(form.sceneTitle.value, form.sceneDescription.value);
                console.log(Scene.allScenes);
                clearInputValues(form.sceneTitle, form.sceneDescription);
            });
        });
    }
};
