import { handleMetalChoice } from "./MetalOptions.js"
import { handleStyleChoice } from "./StyleOptions.js"
import { handleSizeChoice } from "./SizeOptions.js"

document.addEventListener("change", (event) => {
    if (event.target.name === "metal") {
        handleMetalChoice(event)
    }
    if (event.target.name === "style") {
        handleStyleChoice(event)
    }
    if (event.target.name === "size") {
        handleSizeChoice(event)
    }
})