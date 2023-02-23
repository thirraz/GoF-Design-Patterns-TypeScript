import { BicycleFactory } from "../factories/bicycleFactory"
import { CarFactory } from "../factories/carFactory"
import { randomNumbers } from "../factories/utils/randomNumbers"
import { Vehicle } from "../vehicle/vehicle"

export const randomCarAlgorithm=():Vehicle =>{
    const carFactory = new CarFactory()
    const bicycleFactory = new BicycleFactory()

    const car1 = carFactory.getVehicle('Fusca')
    const car2 = carFactory.getVehicle('Celta Preto')
    const bicycle = bicycleFactory.getVehicle('Bicycle')

    const cars = [car1, car2, bicycle]
    return cars[randomNumbers(cars.length)]
}