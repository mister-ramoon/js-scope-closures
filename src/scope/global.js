// Variables

var a; // Declarando
var b = "b"; // Declaramos - Asignamos
b = "bb"; // Reasignación
var a = "aa"; // Redeclarar

// Global Scope
var fruit = "Apple";
//console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "México"; // Global
  console.log(country);
}

countries();
