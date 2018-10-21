const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"/ your components will use this to get/save articles to mongoDb
router
  .get("/api/articles", articlesController.findAll)
  .post("/api/articles", articlesController.create);

router.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
router
  .delete("/api/articles/:id", articlesController.remove);

module.exports = router