import { MyDatabaseFunction } from "./db/myDatabaseFunction"
import { myDatabaseClassic as myDatabaseromModuleA } from "./moduleA"

const myDatabaseClassic = MyDatabaseFunction
myDatabaseClassic.add({ name: "Roberto", age: 30 })
myDatabaseClassic.add({ name: "Joana", age: 22 })
myDatabaseClassic.add({ name: "Luiz", age: 19 })
myDatabaseClassic.show()

console.log(myDatabaseClassic === myDatabaseromModuleA)
