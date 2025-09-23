import { placeOrder } from "./TransientState.js"

export const handleOrderSubmission = async (clickEvent) => {
    clickEvent.preventDefault()
    const result = await placeOrder()
    const messageSection = document.querySelector(".order__message")

    if (result.success) {
        messageSection.textContent = "✅ Your order has been placed successfully!"
        messageSection.className = "order__message order__message--success"
    } else {
        messageSection.textContent = `❌ ${result.message || "Something went wrong placing your order."}`
        messageSection.className = "order__message order__message--error"
    }
}

export const PlaceOrderButton = async () => {
    return `
        <button id="orderButton" type="button">Place Order</button>
    `
}