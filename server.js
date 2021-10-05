"use strict";

const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_ATLAS}`, { useNewUrlParser: true });
const PORT = process.env.PORT;

const getWatches = require("./controller/HomePage.controller");

const {addFav, getFav, updateFav, deleteFav} = require("./controller/FavPage.controller");

app.get("/", (req,res)=> {
    res.send("working")
})


app.get("/home", getWatches);


app.post("/fav", addFav);
app.get("/fav", getFav);
app.put("/fav/:id", updateFav);
app.delete("/fav/:id", deleteFav);




app.listen(PORT, () => {
    console.log(`listenning on port ${PORT}`)
})