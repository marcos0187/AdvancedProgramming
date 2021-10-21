// I want to create a .txt file
const fs = require("fs");
const chalk = require("chalk");

const initialMessege = chalk.blue("App running...")

console.log(initialMessege);

//An object:
const device = {
    sensorModel: "HC04",
    count: 0,
    date: new Date(),
};


//crear un archivo de la base datos local

fs.writeFileSync("./db/log.json",'');
console.log(chalk.green("dataInformation was created successfully"));
try{
    fs.appendFileSync("./db/log.json", JSON.stringify(device));
    console.log(chalk.green("JSON done!"));
}catch(error){
   console.log(chalk.red( chalk.red(`Error: ${error}`)));

}
    console.log(chalk.yellow("Algoritmos running..."));