const mongoose =   require("mongoose");

const adminSchema = mongoose.Schema ({
    image:{type:String,required:[true,"please add the image"]},
    heading:{type:String,required:[true,"please add the heading"]},
    title:{type:String,required:[true,"please add the title"]},
    description:{type:String,required:[true,"please add the description"]},
},
{
    timestamps:true
});

module.exports = mongoose.model("blogData",adminSchema);