import { MyDatabaseFunction } from "./db/myDatabaseFunction"
import { myDatabaseClassic as myDatabaseFromModuleA } from "./module_a"

const myDatabaseClassic = MyDatabaseFunction

myDatabaseClassic.add({ name: "Roberto", age: 30 })
myDatabaseClassic.add({ name: "Joanna", age: 50 })
myDatabaseClassic.add({ name: "Luiza", age: 25 })

myDatabaseClassic.show()

console.log(MyDatabaseFunction === myDatabaseFromModuleA)
