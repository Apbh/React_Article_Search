const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nycreact",
  {
      useMongoClient: true
  }
);

const articleSeed = [
    {
        title: "title1",
        url: "url1",
        date: new Date(Date.now())

    },
    {
        title: "title2",
        url: "url2",
        date: new Date(Date.now())

    },
    {
        title: "title3",
        url: "url3",
        date: new Date(Date.now())

    },
];

db.articleSeed
.remove({})
.then(() => db.Book.collection.insertMany(ArticleSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});