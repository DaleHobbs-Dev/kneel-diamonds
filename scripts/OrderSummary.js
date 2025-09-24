import { getTransientState } from "./TransientState.js"

// helpers to fetch the display names
const getResourceById = async (resource, id) => {
  if (!id || id === 0) return null
  const response = await fetch(`http://localhost:8088/${resource}/${id}`)
  return await response.json()
}

export const renderOrderSummary = async () => {
  const { metalId, sizeId, styleId } = getTransientState()

  // fetch the actual objects
  const [metal, size, style] = await Promise.all([
    getResourceById("metals", metalId),
    getResourceById("sizes", sizeId),
    getResourceById("styles", styleId)
  ])

  // build the summary string
  const summary = `
    <ul>
      <li>Metal: ${metal ? metal.metal : "—"}</li>
      <li>Size: ${size ? size.carats + " carats" : "—"}</li>
      <li>Style: ${style ? style.style : "—"}</li>
    </ul>
  `

  document.querySelector(".order__summary").innerHTML = summary
}

export const Orders = async () => {
  const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=size&_expand=style")
  const orders = await fetchResponse.json()

  console.log(orders)

  let ordersHTML = ""

  if (orders.length === 0) {
    return ordersHTML + "<p>No orders placed</p>"
  }

  ordersHTML += orders.map(order => {
    const totalPrice = (order.metal?.price ?? 0) + (order.size?.price ?? 0) + (order.style?.price ?? 0)

    return `
      <div class="customOrder" data-metal="${order.metal?.metal}">
        <span class="customOrder__id">Order #${order.id}:</span>
        <span class="customOrder__metal">${order.metal?.metal ?? "—"}</span>,
        <span class="customOrder__size">${order.size?.carats ?? "—"} carats</span>,
        <span class="customOrder__style">${order.style?.style ?? "—"}</span>
        → <span class="customOrder__price">$${totalPrice.toFixed(2)}</span>
      </div>
  `
  }).join("")

  return ordersHTML
}
