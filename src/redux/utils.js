export const updateObject = (oldObj, updatedprops) => {
    return {
        ...oldObj,
        ...updatedprops
    }
}