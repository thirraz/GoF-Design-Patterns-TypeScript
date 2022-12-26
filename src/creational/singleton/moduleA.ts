import { MyDatabaseFunction } from "./db/myDatabaseFunction"

const myDatabaseClassic = MyDatabaseFunction
myDatabaseClassic.add({ name: "Luiz", age: 30 })
myDatabaseClassic.add({ name: "Thiago", age: 22 })
myDatabaseClassic.add({ name: "Júlio", age: 19 })

export { myDatabaseClassic }
