// Make Catalog function

export const Catalog = (harvestedFoodArray) => {

    const contentElement = document.querySelector(".container")
    let HTMLToInsert = ""

    for (const plantObj of harvestedFoodArray) {

        HTMLToInsert += `<section class="plant">${plantObj.type}</section>`
    }

    contentElement.innerHTML += `${HTMLToInsert}`
    
}


// export const citizenList = () => {
//     const contentElement = document.querySelector(".list-of-famous-citizens")
    
//     const citizensCopy = useCitizen()
    
//     let citizenHTMLRepresentations = "";
    
//     for (const citizenObj of citizensCopy) {
//         citizenHTMLRepresentations += citizenHTMLLine(citizenObj)
//     }
    
//     contentElement.innerHTML += `
//     ${citizenHTMLRepresentations}
//     `
// }

// import { citizenHTMLLine } from "./citizen.js"

// import { useCitizen } from "./citizenDataProvider.js"

// export const citizenHTMLLine = (taco) => {
//     return `
//             <div class="list__item">${taco.name}</div> 
//   `
// }