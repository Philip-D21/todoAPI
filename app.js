const express = require("express");
require("dotenv").config("./env");
const mongoose = require("mongoose");
const Port = process.env.Port||3000;

const app = express();

const todoRoute = require("../route/todoRouter")

app.use(express.json());

app.use("/todo", todoRoute)

app.get("/", (req,res) =>{
    res.send("Hello World");
})

mongoose.connect("mongodb://localhost:27017");
    


app.listen(3000, ()=>{
    console.log(`server is running on port.${PORT}`)
})