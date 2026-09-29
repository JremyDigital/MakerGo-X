export class Scene {
    static allScenes = [];
    constructor(title, description) {
        this.title = title;
        this.description = description;
        Scene.allScenes.push(this);
    }
}
