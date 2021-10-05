"use strict";

const mongoose = require("mongoose");


let homePageSchema = new mongoose.Schema({
    name:String,
    image:String,
    description: String,
    USD:String
})

let HomePageModel = mongoose.model("home", homePageSchema);



module.exports= HomePageModel;