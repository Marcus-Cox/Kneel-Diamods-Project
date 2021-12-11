import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")
// Do I need to add each of the js scripts to this or only the one?
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}



renderAllHTML()
// why is "event" declaired but never read and does that matter?
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
