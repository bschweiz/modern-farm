
export const harvestPlants = (plantsArray) => {
    const newPlantArray = []
    for (const x of plantsArray) {
        if (x.type === "Corn") { 
            for (let i = 0; i < 3; i++) {
                newPlantArray.push(x);
            }   
        }
        else { for (let i = 0; i < x.output; i++) {
            newPlantArray.push(x);}
        } 
    }   
    return newPlantArray
}