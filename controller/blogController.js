const blogModel = require ("../models/adminModle");
const asyncHandler = require("express-async-handler");


const blogService = require("../service/blogService")

const createBlog = asyncHandler(async (req, res) => {
  console.log("API triggered")
  const { image,heading, title, description} = req.body;

  if (!heading || !title || !description || !image) {
    res.status(400);
    throw new Error("all fields are required");
  }
  const newBlog = {image, heading, title, description};
  const postBlog = await blogService.createBlog(newBlog);
  res.status(200).json(postBlog);
  console.log(newBlog);
}); 

const getBlog = asyncHandler(async(req,res) => {
  try{
    const blog = await blogService.getBlog();
    res.status(200).json(blog);
  }catch(error){
    console.error("error",error);
    res.status(500).json({error})
  }
})

module.exports = {createBlog,getBlog}