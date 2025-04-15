# Connect to a database from application
 - we need connection string to connect to a db and that we can get from mongodb compass
 - create config folder inside the src and add database.js file
 - Need mongoose

 ```
    const mongoose = require('mongoose');
    const connectToDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/DevTinder');
    }
    module.exports =  connectToDB 
```
- Inside app.js file
```
    const express = require("express");
    const server = express();
    const connectToDB = require("./config/database");
    const userModel = require("../../models/User");
    console.log("Creating a express server");

    connectToDB().then(()=> {
        console.log("Connected to a database successfully");
        server.listen(3000,() => {
            console.log("Server started")
        })
    })
```

# schema definiation
- import mongooes
- add schema with type as below

```
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName : {
        type: String
    },
    lastName: {
        type: String
    },
    Age: {
        type: Number
    }
})
 const userModel = mongoose.model("User", userSchema);
 module.exports = userModel;

```
- this is how we have to create a schema.

# Create a Post Request using above Schema 

```
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

```
