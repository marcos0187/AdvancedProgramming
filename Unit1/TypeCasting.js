var myInt = 24;
var myFloat = 3.1416;
var myString = "Marcos";
var myNull= null;

//Type casting: imp ---- exp
console.log(typeof myFloat);
console.log(typeof String(myFloat));
console.log(typeof myFloat);
myString=Boolean(myString);
console.log(typeof myString);
console.log(myString);

//Falsy Values
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(typeof myNull);
console.log(Boolean(myNull));

//True Values
console.log(Boolean("Luis"));
console.log(Boolean(5));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean({key:"5"}));

console.log(isNaN( Number("5x")));

//Type Casting Methods
console.log( Number.parseInt(myFloat));

//Type Casting Coersion implicit
var result = "hola " + "mundo"
var resultNumberStringAdd = 2 + "22";
var resultNumberStringRemainder = 2 - "22";
console.log(result);
console.log(resultNumberStringAdd);
console.log(resultNumberStringRemainder);
