// I want to create a .txt file
const fs = require("fs");
const chalk = require("chalk");

const initialMessege = chalk.blue("App running...")

console.log(initialMessege);


//crear un archivo de la base datos local

fs.writeFileSync("./db/dataInformation.txt","Server Information");
console.log(chalk.green("dataInformation was created successfully"));

