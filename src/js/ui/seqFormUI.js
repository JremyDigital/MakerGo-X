export const generateSeqForm = () => {
    const seqForm = document.createElement("form");
    seqForm.id = "sequence-form";

    const seqTitle = document.createElement("input");
    seqTitle.id = "sequence-title";
    seqTitle.type = "text";
    seqTitle.placeholder = "Sequence Title";
    seqTitle.required = true;

    const seqDescription = document.createElement("textarea");
    seqDescription.id = "sequence-description";
    seqDescription.placeholder = "Description";
    seqDescription.required = true;

    const submitSeqBtn = document.createElement("button");
    submitSeqBtn.id = "add-sequence-btn";
    submitSeqBtn.type = "submit";
    submitSeqBtn.textContent = "Submit";

    seqForm.append(seqTitle, seqDescription, submitSeqBtn);

    const createFilmsSection = document.getElementById("create-films");
    createFilmsSection.append(seqForm);
};
