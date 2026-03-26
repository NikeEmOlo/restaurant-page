import "./home.css";
import ramenImg from "./img/ramen.webp";
import { buildElement, appendElement,} from "./helpers.js";

const heroText = "FEAST YOUR EYES"

//buildElement() will default to div if no tag is passed in.
//buildElement syntax example:
    //const button = createElement({
        //tag: 'button',
        //classes: 'btn btn-primary',
        //text: 'Click me',
        //attrs: {
            //type: 'button',
        //}
    // });


function initHome() {
    renderHome();
    
}

function renderHome(){
    const pageContent = document.querySelector("#content")
    const homeWrapper = buildElement({id: "home-wrap",})
    const title = buildElement({tag: "h1", classes: "home-title-txt", text: heroText})
    const homeImgWrapper = buildElement({classes: "home-img-wrapper"})
    const homeImg = buildElement({tag: "img", classes: "ramen", attrs: {src: ramenImg,}})

    appendElement(pageContent, homeWrapper);
    appendElement(homeWrapper, title);
    appendElement(homeWrapper, homeImgWrapper);
    appendElement(homeImgWrapper, homeImg);
}

function setHomeListeners(){
    
}

export {
    initHome,
    renderHome,
    setHomeListeners,
}
