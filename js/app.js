"Use strict"
//alert("Hola desde un archivo externo");

var owner = "Mauricio Isaza";
console.log(owner)

function inicio (){
    let owner= "Mauro";
    console.log(owner)

    let age = 43;
    console.log(age)
}
inicio();

//Trabajando con números

//número normal
var edad = 43;
console.log(edad)

//número como texto
var numText = "2023";
console.log(numText)

//convertir texto numérico a número
var textNum = Number(numText);
console.log(textNum+15)

parseInt(numText);
console.log(numText+15)

parseFloat(numText)
console.log(numText + 15)

var fecha = new Date()
console.log(fecha)

fecha.getDate