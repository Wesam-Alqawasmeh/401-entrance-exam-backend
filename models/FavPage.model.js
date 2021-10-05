"use strict";

const mongoose = require("mongoose");


let favPageSchema = new mongoose.Schema({
    name:String,
    image:String,
    description: String,
    usd:String
})

let FavPageModel = mongoose.model("fav", favPageSchema);



module.exports= FavPageModel;