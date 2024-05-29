const blogModel = require("../models/adminModle");
const asyncHandler = require("express-async-handler");


//post


async function createBlog(newBlog){

    try{
    const blog = await blogModel.create(newBlog);
    return blog;
    }catch(error){
        console.log('error', error)
    throw new Error("error creating new blog")
    }
};
const getBlog = async () => {
    try{
        const blog = await blogModel.find();
        return blog;
    }
    catch(error){
        console.error('error', error);
        throw new Error("failed",error.message)
    }
}

module.exports = {createBlog,getBlog};