import { handleMetalChoice } from "./MetalOptions.js"
import { handleStyleChoice } from "./StyleOptions.js"
import { handleSizeChoice } from "./SizeOptions.js"
import { handleOrderSubmission } from "./orderButton.js"
import { renderOrderSummary } from "./OrderSummary.js"


// Handle "change" events for the select lists
document.addEventListener("change", async (event) => {
    if (event.target.name === "metal") {
        handleMetalChoice(event)
        await renderOrderSummary()
    }
    if (event.target.name === "style") {
        handleStyleChoice(event)
        await renderOrderSummary()
    }
    if (event.target.name === "size") {
        handleSizeChoice(event)
        await renderOrderSummary()
    }
})

// Handle "click" event for the order button
document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
        handleOrderSubmission(event)
    }
})