import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { PlaceOrderButton } from './orderButton.js'
import { renderOrderSummary } from "./OrderSummary.js"
import { Orders } from "./OrderSummary.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const placeOrderButtonHTML = await PlaceOrderButton()
    const ordersHTML = await Orders()

    // compose all of the HTML together
    // using template literals to inject the smaller HTML snippets
    // into the larger overall HTML structure
    // this is a big improvement over the last way we did it
    // because now each component is responsible for its own HTML
    // and this function just assembles the pieces
    // instead of having to know all the details of each piece
    // this is a much more modular approach
    // and makes it easier to maintain and update the code
    // because changes to one component don't affect the others
    // as long as the interface (the function that returns the HTML)
    // stays the same
    // this is a key principle of software engineering
    // called separation of concerns
    // and it helps to keep the codebase clean and manageable
    // especially as the application grows in complexity
    // so always strive for modularity and separation of concerns
    // in your code
    // it will pay off in the long run
    // trust me on this one

    const composedHTML = `
           <article class="choices">
                <section class="choices__metals options">
                    <h2>Metals</h2>
                    ${metalOptionsHTML} 
                </section>

                <section class="choices__sizes options">
                    <h2>Sizes</h2>
                    ${sizeOptionsHTML}
                </section>

                <section class="choices__styles options">
                    <h2>Styles</h2>
                    ${styleOptionsHTML}
                </section>
            </article>

            <article class="order">
                <h2>Your Order</h2>
                <section class="order__summary">
                    <!-- summary of selections -->
                </section>
                 <section class="order__message">
        <!-- success/error messages will appear here -->
    </section>
                <section class="order__button">
                    ${placeOrderButtonHTML}
                </section>
            </article>

            <article class="customOrders">
                <h2>Custom Jewelry Orders</h2>
                <section class="customOrder__summary">
                    ${ordersHTML}
                </section>
            </article>
    `

    container.innerHTML = composedHTML

    import("./eventHub.js")

    await renderOrderSummary()
}

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()