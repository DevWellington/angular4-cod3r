let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
console.log("This is episode " + 4)

episode = episode + 1
console.log("Next episode is " + episode)

//let favoriteDroid
let favoriteDroid: any
favoriteDroid = "K-2SO"
console.log("My favorite droid is " + favoriteDroid)


// let isEnoughToBeatMF = function (parsecs: number): boolean {
// 	return parsecs < 12
// }

// Arrow Function
let isEnoughToBeatMF = (parsecs: number) : boolean => parsecs < 12

let distance = 11

console.log(`Is ${distance} parsecs enough to beat Millennium Falcon ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'} `)

// array functions
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')


// parametros padroes em TS
// function inc (speed: number, inc: number = 1): number {
// 	return speed + inc
// }
//
// Arrow Function
let inc = (speed: number, inc: number = 1): number =>
	speed + inc

console.log(`ìnc (5,1) = ${inc(5,1)}`)
console.log(`ìnc (5) = ${inc(5)}`)

// Classes e Interfaces
// Módulos (ES6)
import { Spacecraft, Containership } from './base-ships'
import { MilleniumFalcon } from './starfighters'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob (falcon) ? 'yes' : 'no' }`)


// Importando uma Biblioteca em JS 
import * as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40, "="))


// Default Function
// 
// function inc(speed: number, inc: number = 1) : number {
//     return speed + inc
// }

// console.log(inc_af(5,1))
// console.log(inc_af(5))

// Arrow Function
// 
let inc_af = (speed: number, inc: number = 1) : number => {
	return speed + inc
}

console.log(inc_af(5,1))
console.log(inc_af(5))


