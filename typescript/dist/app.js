"use strict";
exports.__esModule = true;
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
//let favoriteDroid
var favoriteDroid;
favoriteDroid = "K-2SO";
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO') + " ");
// array functions
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
// parametros padroes em TS
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("\u00ECnc (5,1) = " + inc(5, 1));
console.log("\u00ECnc (5) = " + inc(5));
// Classes e Interfaces
// Módulos (ES6)
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
// Importando uma Biblioteca em JS 
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
