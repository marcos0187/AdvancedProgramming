const chalk = require("chalk");
const exPress = require("express");
const router = exPress.Router();

router.get("/raspberry", function(request, response){
    console.log(request)
    response.json("Led On");
    console.log(chalk.red("Led on"));

});

router.get("/home", function(request, response){
    console.log(request)
    response.json("welcome to home");
    console.log(chalk.gray("welcome home"));

});

router.post("/raspberry", (req, res)=>{
    console.log(req);
    res.send("posting")
   
})

module.exports = router;
