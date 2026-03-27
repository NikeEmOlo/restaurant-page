import "./contact.css"
import { buildElement, appendElement } from "./helpers.js";

function renderContact(){
    const formData = {
        form: {
            tag: "form",
            classes: "contact-frm",
            attrs: { method: "post" }
        },
        fields: [
            { tag: "input", classes: "contact-input", attrs: { type: "text", placeholder: "Your name", name: "name" } },
            { tag: "input", classes: "contact-input", attrs: { type: "tel", placeholder: "Your phone", name: "phone" } },
            { tag: "input", classes: "contact-input", attrs: { type: "email", placeholder: "Your email", name: "email" } },
            { tag: "textarea", classes: "contact-input", attrs: { placeholder: "Your message", name: "description" } },
            { tag: "button", classes: "contact-btn", text: "Send", attrs: { type: "submit" } }
        ]
        }
    const contactInfo = {
        address: "10 Downing Street, London, E1 3AB",
        email: "getsomeramen@ourrestaurant.com",
        phone: "+447766554433"
    }
    const pageContent = document.querySelector("#content");
    const contactWrapper = buildElement({classes: "tab-wrapper", id: "contact",})
    const form = buildElement(formData.form)
    contactWrapper.style.display = "none";
    appendElement(pageContent, contactWrapper);
    const table = buildElement({ tag: "table", classes: "contact-table" });

    //Add contact info
    Object.entries(contactInfo).forEach(([key, value]) => {
    const row = buildElement({ tag: "tr" });
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    const th = buildElement({ tag: "th", text: label });
    const td = buildElement({ tag: "td", text: value });

    appendElement(row, th);
    appendElement(row, td);
    appendElement(table, row);
    });

    //Add form
    appendElement(contactWrapper, form)
    formData.fields.forEach((field) => {
        const el = buildElement(field);
        if (field.attrs.type === "submit") {
            el.addEventListener("click", (e) => e.preventDefault());
        }
        appendElement(form, el);
    })

    //Add contact info
    appendElement(contactWrapper, table);

    return contactWrapper;
}

export default renderContact;