const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB)


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