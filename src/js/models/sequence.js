export class Sequence {
    static allSequences = [];
    constructor(title, description) {
        this.title = title;
        this.description = description;
        Sequence.allSequences.push(this);
    }
}
