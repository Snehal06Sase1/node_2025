# Routing and request handlers

# Routing
- app.use("/") -> then it will match the routes staring with /
- app.use("/test", () => {
    console.log("This is Test");
  })
  if put /test then it will print this is test
  if put /test/hello then same will be printed as above. Basically it matches the /test 

ab?c
ab*c
ab+c
a(bc)?d

app.get('ab?c') -> b is optional

- /user?userId=1001 ---> to take userid passed as query parameter we can use req.params

# In Express.js: 
- req.params is used for route parameters (like /abc/:userId)
- req.query is used for query string parameters (like ?userId=101)


------------------------------------------------------------------------------------------------

# Middlerwares and Error Handlers

server.get("/abc", (req, res) => {
    console.log(req.query)
    res.send("Hello Snehal::::" + req.query.userId) --- # Always send response back to the client otherwise the request will be hanged
     // and timeout will happen and request will be back
})

- There can be multiple request handlers

server.get("/abc", (req, res, next) => {
    console.log(req.query)
    // we are not sending response back here
    next() -> when we call next it will go to next request handler
},(req, res) => {
    console.log(req.query)
})

# Request handlers can be an array too.

server.get("/abc", (req, res, next) => {
    console.log(req.query)
    // we are not sending response back here
    next() -> when we call next it will go to next request handler
},[(req, res, next) => {
    console.log(req.query)
},(req, res, next) => {
  console.log("Hellow")
  res.send("Helllo")
}])

# middlerwear for authorization 

      `server.use("/admin", (req, res, next) => {
          const token = "xyzzx";
          const isAuthorisedUser = token === "xyx";
          if(isAuthorisedUser) {
              next();
          } else {
              res.status(401).send("Unauthorised user!")
          }
      })`

This part is common for the all the requests so it will be in middlewear.

