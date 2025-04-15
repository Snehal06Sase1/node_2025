const express = require("express");
const server = express();

console.log("Creating a express server");

server.use("/admin", (req, res, next) => {
    const token = "xyzzx";
    const isAuthorisedUser = token === "xyx";
    if(isAuthorisedUser) {
        next();
    } else {
        res.status(401).send("Unauthorised user!")
    }
})

server.get("/admin/getAllUsers", (req, res) => {
    res.send("List of Users is here!")
})

server.get("/admin/deleteUser", (req, res) => {
    res.send("Oops, User is Deleted!")
})

server.listen(3000,() => {
    console.log("Server started")
})
