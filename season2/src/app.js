const express = require("express");
const server = express();
const connectToDB = require("./config/database");
const userModel = require("../../models/User");
console.log("Creating a express server");

// server.use("/admin", (req, res, next) => {
//     const token = "xyzzx";
//     const isAuthorisedUser = token === "xyx";
//     if(isAuthorisedUser) {
//         next();
//     } else {
//         res.status(401).send("Unauthorised user!")
//     }
// })

// server.get("/admin/getAllUsers", (req, res) => {
//     res.send("List of Users is here!")
// })

// server.get("/admin/deleteUser", (req, res) => {
//     res.send("Oops, User is Deleted!")
// })

server.post('/signUp', async(req, res)=> {
    const userObj = {
        firstName: "snehal",
        lastName: "Sonawane",
        Age: 30
    }
    const userInfo = new userModel(userObj);
    await userInfo.save();
    res.send(userInfo);
})


connectToDB().then(()=> {
    console.log("Connected to a database successfully");
    server.listen(3000,() => {
        console.log("Server started")
    })
})
