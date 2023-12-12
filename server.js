// import express and cors
const express = require("express")();
const cors = require("cors")();

//create the express application
const app = express();

//set the port
const port = 8080;

// use express.json() middleware for parsing JSON bodies
app.use(express.json());

// use CORS for crooss-origin requests
app.use(cors());

//define route

//start the server
app.listen(8080, () => {
    console.log(`Server running http://localhost:${port}`);
});


//add all pokemon to db(database)
//post= create (Crud)
app.post("/pokemon", (req,res) => {
  let item = ("item")
  db
    res.send("")
});


//update pokemon in db(database)
//put/patch= update (crUd)
app.patch("/pokemon/:id", (req,res) => {
    res.send("update a pokemon");
});

// get= Read from db (cRud)
app.get("/pokemon/all", (req,res) => {
   res.send("get all pokemon");
});

// get= Read from db (cRud)
app.get("/pokemon/name/:id", (req,res) => {
   res.send("get specific pokemon");
});


// delete = remove from db (cruD)
app.delete("/pokemon/name/delete/:id", (req,res) => {
    res.send("delete a pokemon");
});
  

