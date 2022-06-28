
const express = require("express"); // import express library
const cors = require("cors"); //import cors module
const app = express(); //Initialize express

require("./Config/dotenv"); //Import your environmental configs
const pool = require("./Config/db");
const user = require("./routes/routes");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5050;

const hostURL = 'localhost'; //Fault-Tolerant listening port for Backend. Picks available dynamic IPv4 and IPv6 addresses of the local host

pool.connect((err) =>{ // Connect to the Database
   if (err) {
     }
  else {
    console.log("Data logging initialised");
   }

});



app.get("/", (req, res) =>{
    res.status(200).send("Sever Initialized and Online. Ready to take OFF!");
});

app.use("/user", user) // User endpoint API



app.listen(port, process.env.baseURL , () =>{  
   console.log(`Here we go, All Engines started at ${port}.`) 
})
