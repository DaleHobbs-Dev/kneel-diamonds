import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()

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
            </article>

            <article class="customOrders">
                <h2>Custom Jewelry Orders</h2>
                <!-- list of saved orders -->
            </article>
    `

    container.innerHTML = composedHTML
}

render()