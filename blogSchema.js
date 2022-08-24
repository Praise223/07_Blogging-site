const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://MyFirstBlog:Qod0uOkv48cztlyJ@nodeapps.urxugm6.mongodb.net/blog")


const blogSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    } ,
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required:true
    } 
    // name: String,
    // title: String,
    // body: String
})

module.exports = mongoose.model("post", blogSchema)