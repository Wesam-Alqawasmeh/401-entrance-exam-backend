"use strict";
const FavPageModel = require("../models/FavPage.model");

//  ========================POST===================================

let addFav = async (req, res) => {
  let watch = req.body;

  let newFav = await new FavPageModel({
    name: watch.name,
    image: watch.image,
    description: watch.description,
    usd: watch.usd,
  });

  await newFav.save();

  await FavPageModel.find({}).then((items) => {
    res.json(items);
  });
};

//  ========================GET===================================

let getFav = async (req, res) => {
  await FavPageModel.find({}).then((items) => {
    res.json(items);
  });
};

//  ========================PUT===================================

let updateFav = async (req, res) => {
  let id = req.params.id;
  let updatedWatch = req.body;

  FavPageModel.findById({ _id: id }).then(async (item) => {
    item.name = updatedWatch.name;
    item.image = updatedWatch.image;
    item.description = updatedWatch.description;
    item.usd = updatedWatch.usd;
    await item.save();

    await FavPageModel.find({}).then((watches) => {
      res.send(watches);
    });
  });
};

//  ========================DELET===================================

let deleteFav = async (req, res) => {
  let id = req.params.id;

  FavPageModel.findByIdAndDelete(id, async (err) => {
    if (err) {
      res.send("an error occurd");
    }

    await await FavPageModel.find({}).then((watches) => {
      res.send(watches);
    });
  });
};

module.exports = { addFav, getFav, updateFav, deleteFav };
