"use strict";

const axios = require("axios");
const HomePageModel = require("../models/HomePage.model");

// let seed = (req, res) => {
//   axios
//     .get("https://watches-world.herokuapp.com/watches-list/")
//     .then((items) => {
//       items.data.map((watch) => {
//         let oneWatch = new HomePageModel({
//           name: watch.title,
//           image: watch.image_url,
//           description: watch.description,
//           USD: watch.toUSD,
//         });
//         oneWatch.save();
//       });
//     });

//     res.send("seeded")
// };

let getWatches = async(req,res)=> {
    HomePageModel.find({}).then(data => {
        res.status(200).json(data)
    })
}

module.exports= getWatches;
