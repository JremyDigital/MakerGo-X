export const generateSceneForm = () => {
    const sceneForm = document.createElement("form");
    sceneForm.id = "scene-form";

    const sceneTitle = document.createElement("input");
    sceneTitle.id = "scene-title";
    sceneTitle.type = "text";
    sceneTitle.placeholder = "Scene Title";
    sceneTitle.required = true;

    const sceneDescription = document.createElement("textarea");
    sceneDescription.id = "scene-description";
    sceneDescription.placeholder = "Description";
    sceneDescription.required = true;

    const submitSceneBtn = document.createElement("button");
    submitSceneBtn.id = "add-scene-btn";
    submitSceneBtn.type = "submit";
    submitSceneBtn.textContent = "Submit";

    sceneForm.append(sceneTitle, sceneDescription, submitSceneBtn);

    const createFilmsSection = document.getElementById("create-films");
    createFilmsSection.append(sceneForm);

    return { sceneForm, sceneTitle, sceneDescription, submitSceneBtn };
};
