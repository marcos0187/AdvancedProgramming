var varNumber = 12;
var myFloat = 3.1416;
let myString = "Helloworld";

import {validateWorld} from './utils.js';

console.log(`${myString.length}`);
console.log(`${myString.toLowerCase()}`);
console.log(`${myString.indexOf("o")}`);


if (validateWorld (myString, "Hello")){
    console.log("hi everyone");

}

const mySubstring = myString.substring(0,5);
const newString=myString.padEnd(30,"-")
console.log(newString);
