import { MyDatabaseFunction } from "./db/myDatabaseFunction"

const myDatabaseClassic = MyDatabaseFunction
myDatabaseClassic.add({ name: "Luis", age: 30 })
myDatabaseClassic.add({ name: "Maria", age: 50 })
myDatabaseClassic.add({ name: "Eduardo", age: 25 })
myDatabaseClassic.remove(1)
myDatabaseClassic.show()

export { myDatabaseClassic }
