import { AbstractMeal } from "./abstractMeal"

export class Rice extends AbstractMeal {}

const rice = new Rice("Rice", 50)
console.log(rice)
