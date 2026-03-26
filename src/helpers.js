function buildElement(options = {}){
    const {
        tag = "div",
        classes,
        id,
        text,
        attrs = {},
    } = options;

    const el = document.createElement(tag);

    if (classes) el.className = classes;
    if (id) el.id = id;
    if (text) el.textContent = text;
    if (attrs) {
        Object.entries(attrs).forEach(([key, value]) => {
            el.setAttribute(key, value);
        });
    }

    return el;
}

function appendElement(parent, child){
    parent.appendChild(child)
}

export {
    buildElement,
    appendElement,
}