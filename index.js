const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send({ example: "hello" });
});



app.listen(5000);