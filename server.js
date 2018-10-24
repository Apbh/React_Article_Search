const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Require all models
const db = require('./models');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Routing
const router = new express.Router();
const articlesController = require("./controllers/articlecontroller");

// Matches with "/api/articles"/ your components will use this to get/save articles to mongoDb
router
  .get("/api/articles", articlesController.findAll)
  .post("/api/articles", articlesController.insert);

router.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
router
  .delete("/api/articles/:id", articlesController.remove);


app.use(router);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reacthealthtracker";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});