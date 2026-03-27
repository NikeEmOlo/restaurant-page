import { renderHome } from "./home.js";
import {renderMenu} from "./menu.js"
import renderContact from "./contact.js";

let currentTab;
let home;
let menu;
let contact;

function setTabListeners(){
    const tabs = document.querySelectorAll(".nav-button");
    for (const tab of tabs) {
        tab.addEventListener("click", (e) => tabController(e));
    }
}

function loadTabs(){
    home = renderHome();
    menu = renderMenu();
    contact = renderContact();
    currentTab = home;
    return {home, menu, contact}
}

function tabController(e){
    document.querySelectorAll(".nav-button").forEach(btn => {
        btn.classList.remove("active");
    });

    e.target.classList.add("active")
    
    switch (e.target.id) {
        case "menu-b":
            currentTab.style.display = "none";
            menu.style.display = "flex";
            currentTab = menu;
            break;
        case "home-b":
            currentTab.style.display = "none";
            home.style.display = "flex";
            currentTab = home;
            break;
        case "contact-b":
            currentTab.style.display = "none";
            contact.style.display = "flex";
            currentTab = contact;
            break;
    }
}

export {
    setTabListeners,
    loadTabs,
}