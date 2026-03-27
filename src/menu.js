import { menuData } from "./menu_data.js";
import { buildElement, appendElement } from "./helpers.js";
import "./menu.css"

function renderMenu(){
    const pageContent = document.querySelector("#content")
    const menuWrapper = buildElement({classes: "tab-wrapper", id: "menu",})
    menuWrapper.style.display = "none";
    appendElement(pageContent, menuWrapper);
    createHeaders(menuData, menuWrapper);
    createMenuElements(menuData)

    return menuWrapper;
}

function createHeaders(menuData, menuWrapper){
    //for each item in menu data
    //extract the category and make a list
    //make a new list of categories that contains only UNIQUE values

    const categories = [];
    menuData.forEach(item => categories.push(item.category));
    const uniqueCat = [...new Set(categories)]

    // for each unique value create an element that uses the value as textContent
    uniqueCat.forEach((cat) => {
        let sectionWrapper = buildElement({classes: "section-wrap", id: cat})
        let el = buildElement({tag: "h2", classes: "section-hdr", text: cat})
        appendElement(menuWrapper, sectionWrapper)
        appendElement(sectionWrapper, el)
    })  
}

function createMenuElements(menuData) {

    for (let i = 0; i < menuData.length; i++) {
        let dish = menuData[i]
        new Dish(dish).renderCard()
    }       
}

class Dish {
    constructor({id, name, category, subcategory, description, price}) {
        this.card = buildElement({classes: "dish-card", id: id,})
        this.name = buildElement({tag: "h3", text: name, classes: "title"})
        this.id = buildElement({tag: "h4", text: id, classes: "dish-num"})
        this.description = buildElement({tag: "p", text: description, classes: "description"})
        this.price = buildElement({tag: "h4", text: price, classes: "price"})
        this.category = category;
        this.subcategory = subcategory;
    }

    renderCard() {
        const section = document.querySelector(`#${this.category}`);

        appendElement(this.card, this.name)
        appendElement(this.card, this.id)
        appendElement(this.card, this.description)
        appendElement(this.card, this.price)
        appendElement(section, this.card);
    }

}

export {
    renderMenu,
}