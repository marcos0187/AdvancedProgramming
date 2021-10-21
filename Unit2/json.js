const device = {
    sensorModel: "HC04",
    count: 0,
    date: new Date(),
};

console.log(device.date.getFullYear(), typeof device);
const deviceJSON = JSON.stringify(device);
console.log(deviceJSON, typeof deviceJSON);

//crear un JSON desde code

const myJson = '{"name": "Luis", "edad": "24", "friends": ["Rafa", "Pepe"], "isMannager": false}';
console.log(myJson, typeof myJson);

//manipular JSON format
//convertir JSON a un objeto de JS

const myObj = JSON.parse(myJson);
console.log(myObj.name);