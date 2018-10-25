const Article = require("../models/Article");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
      console.log("Getting all articles in database");
    Article
      .find()
    //   .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  insert: function(req, res) {
    console.log("Adding saved article to the db");
    console.log("req.body: ", req.body);
    Article.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
      // res.status(422).json(err));
  
    },
       
    remove: function(req, res) {
      Article.remove({_id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  }


