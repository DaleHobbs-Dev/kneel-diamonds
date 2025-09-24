import { isValidId } from "./helperFunctions.js"

const transientState = {
    styleId: 0,
    sizeId: 0,
    metalId: 0
}

export const getTransientState = () => {
    // return a shallow copy so outside code can’t directly mutate state
    return { ...transientState }
}

// 🔹 Reset function
export const resetTransientState = () => {
    transientState.styleId = 0
    transientState.sizeId = 0
    transientState.metalId = 0
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = parseInt(chosenStyle)
    console.log("transientState", transientState)
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = parseInt(chosenSize)
    console.log("transientState", transientState)
}

export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = parseInt(chosenMetal)
    console.log("transientState", transientState)
}

export const placeOrder = async () => {
    const { styleId, sizeId, metalId } = transientState

    // validate selection
    const orderValid = isValidId(styleId) && isValidId(sizeId) && isValidId(metalId)
    if (!orderValid) {
        return { success: false, message: "Invalid order: missing choices" }
    }

    try {
        const postOrder = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ styleId, sizeId, metalId }) // no id here
        }

        const response = await fetch("http://localhost:8088/orders", postOrder)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        const newSubmission = await response.json()

        // let the app know state changed
        const customEvent = new CustomEvent("newOrderPlaced")
        document.dispatchEvent(customEvent)

        resetTransientState()

        return { success: true, data: newSubmission }
    }
    catch (err) {
        return { success: false, message: err.message }
    }
}