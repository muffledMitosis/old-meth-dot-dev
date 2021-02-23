const utils = require('./utils/utils');
const express = require("express");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const app = express();
const PORT = 6969;

rl.on('line', (input)=>{
    console.log(input);
});

app.get("/", (req, res, next) => {
    var date = Date.now();
    res.json({
        "up": true,
        "date": date
    });
});

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});