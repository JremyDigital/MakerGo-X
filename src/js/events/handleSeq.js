import { generateSeqForm } from "../ui/seqFormUI.js";
import { Sequence } from "../models/sequence.js";
import { clearInputValues } from "../utils/domUtils.js";

export const handleSequence = () => {
    const seqBtn = document.getElementById("sequence-btn");

    if (seqBtn) {
        seqBtn.addEventListener("click", () => {
            const form = generateSeqForm();

            form.submitSeqBtn.addEventListener("click", () => {
                if (form.seqTitle.value !== "" && form.seqDescription.value !== "") {
                    const usersSequence = new Sequence(form.seqTitle.value, form.seqDescription.value);
                    console.log(Sequence.allSequences);
                    clearInputValues(form.seqTitle, form.seqDescription);
                }
            });
        });
    }
};
