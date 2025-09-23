export const isValidId = (id) => {
    return typeof id === "number" && id > 0
}