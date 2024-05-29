const express = require("express");
const router = express.Router();
const {createBlog,getBlog} = require("../controller/blogController");


router.route("/").post(createBlog);
router.route("/").get(getBlog);




module.exports = router;