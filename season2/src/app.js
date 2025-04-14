const express = require("express");
const server = express();

console.log("Creating a express server");

server.get("/", (req, res) => {
    res.send("Hello Snehal!!")
})

server.listen(3000,() => {
    console.log("Server started")
})