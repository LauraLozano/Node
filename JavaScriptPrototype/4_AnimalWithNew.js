function Animal(name,energy){
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy
    
    return animal
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy += length
}

function AnimalWithNew(name,energy){
    //let animal = Object.create(Animal.prototype)
    this.name = name
    this.energy = energy
    
    //return animal
}

AnimalWithNew.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

AnimalWithNew.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

AnimalWithNew.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy += length
}

const leo = Animal('leo',7)
const snoop = Animal('Snoop',10)

const leoWithNew = new AnimalWithNew('leo',7)
const snoopWithNew = new AnimalWithNew('Snoop',10)