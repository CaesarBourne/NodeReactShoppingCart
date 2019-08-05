const express = require("express");
const routes = express.Router();
const ShoppingModel = require("../model/shopmodel");

//get all data
routes.get("/", (req, res) => {
  ShoppingModel.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

routes.post("/", (req, res) => {
  let item = new ShoppingModel({
    name: req.body.name
  });
  item
    .save()
    .then(item => res.json(item))
    .catch(err => {
      console.log(`Sorry item wasnt saved this is the error: ${err}`);
    });
});

routes.delete("/:id", (req, res) => {
  ShoppingModel.findById(req.params.id)
    .then(item =>
      item
        .remove()
        .then(() => res.json({ SUCCESS: "Item succesfully removed" }))
    )
    .catch(error => {
      res.status(400).json({ Error: "couldnt delete" });
    });
});
module.exports = routes;
