import { MainDishBuilder } from "./classes/mainDishBuilder"
import { VeganDishBuilder } from "./classes/veganDishBuilder"

const mainDishBuilder = new MainDishBuilder()
mainDishBuilder.makeMeal().makeDessert()
console.log(mainDishBuilder.getMeal())
console.log(mainDishBuilder.getPriceMainDish())

mainDishBuilder.reset()

const meal2 = mainDishBuilder.makeBeverage().getMeal()
console.log(meal2)

const veganDishBuilder = new VeganDishBuilder()
const veganMeal = veganDishBuilder.makeMeal().getMeal()
console.log(veganMeal)
console.log(veganMeal.getPrice())
