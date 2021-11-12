const express = require ("express");
const { append } = require("vary");

const PORT = 3000;
const app = express();

app.listen (PORT, () => {

    console.log("app running");

})