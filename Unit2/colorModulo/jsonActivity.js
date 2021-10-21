const fs = require("fs");
const chalk = require("chalk");
const initialMessege = chalk.blue("App running...")
    console.log(initialMessege);


const myCar = {
    marca: "Nissan",
    modelo: "Sentra", 
    color: "plata", 
    motor: "4 cil", 
    transmision: "ATM", 
    precio: 250000,

};

const mark = myCar.marca;
console.log(`me gusta la marca ${mark}`);

console.log(`solo se manejar ${myCar.transmision}`);

fs.writeFileSync("./db/myFirstJSON.json",'');
console.log(chalk.green("dataInformation was created successfully"));
try{
    fs.appendFileSync("./db/myFirstJSON.json", JSON.stringify(myCar));
    console.log(chalk.green("JSON done!"));
}catch(error){
   console.log(chalk.red( chalk.red(`Error: ${error}`)));

}
    console.log(chalk.yellow("Algoritmos running..."));