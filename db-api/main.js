const express = require("express");
const app = express();

const PORT = 8081;

app.get("/test", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(PORT, () => {
 console.log("Server running on port 3000");
});