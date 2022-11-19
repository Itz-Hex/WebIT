const express = require("express");
const blogController = require("../controllers/blog.controller");
const router = express.Router();

router.get("/blog", blogController.getBlog);
router.get("/blog/geneblog", blogController.geneBlog);
router.get("/blog/filter/:query", blogController.filterBlog);
router.get("/blog/:id", blogController.getPost);

module.exports = router;
