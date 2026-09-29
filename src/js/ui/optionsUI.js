export const generateOptions = () => {
    const createFilmsSection = document.getElementById("create-films");

    const sequenceBtn = document.createElement("button");
    sequenceBtn.id = "sequence-btn";
    sequenceBtn.textContent = "Add Sequence";

    const sceneBtn = document.createElement("button");
    sceneBtn.id = "scene-btn";
    sceneBtn.textContent = "Add Scene";

    createFilmsSection.append(sequenceBtn, sceneBtn);
};
