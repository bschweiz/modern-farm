let plantArray = []

export const addPlant = (seedObj) => {
    if (Array.isArray (seedObj) === true) {
        seedObj.forEach( x => plantArray.push(x))
    }
    else { plantArray.push(seedObj) }
}

export const usePlants = () => {
    //copy array method???
    let newArray = plantArray;
    return newArray
}

