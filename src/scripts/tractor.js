import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"

export const plantSeeds = (currentPlan) => {
    for(const row of currentPlan) {
        for(const plant of row) {
            if (plant === "Potato") {
                addPlant(createPotato());
            }
            else if (plant === "Soybean") {
                addPlant(createSoybean())
            }
            else if (plant === "Wheat") {
                addPlant(createWheat())
            }
            else if (plant === "Sunflower") {
                addPlant(createSunflower())
            }
            else if (plant === "Corn") {
                let cornSeeds = createCorn()
                for (let i = 0; i < cornSeeds.length; i++) {
                    addPlant(cornSeeds[i])
                }
            }
            else if (plant === "Asparagus") {
               addPlant(createAsparagus())
            }
        }
        
    };  
} 


















// ----my weird first attempt--------------
// export const plantSeeds = (currentPlan) => {
//     let seedArray = []  
//     currentPlan.forEach(row => { 
//         row.forEach(plant => {
//             if (plant === "Potato") {
//                 // console.log("Potato Seed Object");
//                 seedArray.push(createPotato())
//             }
//             else if (plant === "Soybean") {
//                 // console.log("Soybean Seed Object");
//                 seedArray.push(createSoybean())
//             }
//             else if (plant === "Wheat") {
//                 // console.log("Wheat Seed Object");
//                 seedArray.push(createWheat())
//             }
//             else if (plant === "Sunflower") {
//                 // console.log("Sunflower Seed Object");
//                 seedArray.push(createSunflower())
//             }
//             else if (plant === "Corn") {
//                 // console.log("Corn Seed Object");
//                 let cornSeeds = createCorn()
//                 for (let i = 0; i < cornSeeds.length; i++) {
//                     seedArray.push(cornSeeds[i])
//                 }
//             }
//             else if (plant === "Asparagus") {
//                 // console.log("Asparagus Seed Object");
//                 seedArray.push(createAsparagus())
//             }
//         })
        
//     });
//     console.log(seedArray);    
// } 
