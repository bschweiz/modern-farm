console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

const yearlyPlan = createPlan();

import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()

import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()

const test = usePlants()

console.log(yearlyPlan);

plantSeeds(yearlyPlan);


const harvestToSell = harvestPlants(test);

console.log(harvestToSell);