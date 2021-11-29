Unirº

fs.writeFileSync("./db/log.json",'');
console.log(chalk.green("dataInformation was created successfully"));
try{
    fs.appendFileSync("./db/log.json", JSON.stringify(device));
    console.log(chalk.green("JSON done!"));
}catch(error){
   console.log(chalk.red( chalk.red(`Error: ${error}`)));

}
    console.log(chalk.yellow("Algoritmos running..."));
    