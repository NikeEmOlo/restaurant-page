import { buildElement, appendElement } from "./helpers.js";

function renderContact(){
    const pageContent = document.querySelector("#content");

    const form = buildElement({tag: "form", classes: "contact-frm", attrs: {method: "post",}})
    const nameField = buildElement({tag: "input", attrs: {type: "text"}})

    const formFields = {
        
    }
}