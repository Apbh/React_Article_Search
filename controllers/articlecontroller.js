const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
      console.log("Getting all articles in database");
    db.Article
      .find()
    //   .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("Adding saved artice to the db");
    console.log("req.body: ", req.body);
    db.Article.create(req.body).then(function(dbModel) {
      res.json(dbModel);
    //   console.log("doc: ", dbModel);
    })
    .catch(err => res.status(422).json(err));
       
  },

  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}