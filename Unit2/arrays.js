//Create an array

var myArray = [1,2,3,4,5];
// var newArray = [1,2,3];

//longitud de array
const ln = myArray.length;
console.log(ln);

//show array
console.log(myArray);

//iterate array
for (let i=0; i<ln; i++){
    console.log(myArray[i]);
}
console.log("---");
for (let i in myArray){
    console.log(myArray[i]);
}
console.log("---")
for (let i of myArray){
    console.log(i);
}

//Adding elements
let data = [];
console.log(data);
const temp = 27;
data.push(temp);
data.push(12);
data.push(60);
console.log(data);

//Insert 1st element
data.unshift(12);
console.log(data);

//Insert multiple elements
data.splice(2,0,3,4);
console.log(data);

