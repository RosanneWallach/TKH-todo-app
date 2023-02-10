import express from "express";
//create instance of our server
const app = express();
//setup middleware to tell our server we can send and receive json
app.use(express.json())
//there are different requests that can we can make to a server: GET, POST, PUT/PATCH, DELETE
//use .get method to create GET route
//.get takes in route param "/" , and request and response params 
// .status sends a status code. 200 = ok 
// .send sends back html
app.get("/", function(_req, res){
  res.status(200).send("<h1>Hello World</h1>")
})
//start server 
app.listen(8080, function(){
  console.log("App is listening at http://localhost:8080")
})