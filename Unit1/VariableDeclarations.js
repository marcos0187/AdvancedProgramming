
//Global scope
var myVar = 100;
let myLet = 15;
const myConst = 3.1416;

console.log(`myVar: ${myVar}, myLet: ${myLet}, myConst: ${myConst}, HoistedVariable: ${hoistedVariable}`);

//Hoisting

var hoistedVariable = 25; //var hoisted

//Local scope
function aFunctionBlock(){
if (true) {//Execute Context
    console.log(myVar);
    var myVar = 50;
    console.log(myVar);
};
};
aFunctionBlock();