const transientState = {
    styleId: 0,
    sizeId: 0,
    metalId: 0
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log("transientState", transientState)
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log("transientState", transientState)
}

export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log("transientState", transientState)
}