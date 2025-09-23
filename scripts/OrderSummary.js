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