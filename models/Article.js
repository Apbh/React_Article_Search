const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  _id: { type: Schema.Types.ObjectId},
  title: { type: String, required: true },
  url: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;