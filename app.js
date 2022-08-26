//Requiring the installed modules
require("dotenv").config()
const ejs = require("ejs")
const mongoose = require("mongoose")
const express = require ("express")

// Ending of requiring the installed modules



const app = express()

mongoose.connect("mongodb+srv://MyFirstBlog:Qod0uOkv48cztlyJ@nodeapps.urxugm6.mongodb.net/blog")
.then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err, "Database Connectiion Failed!")
})

//Setting View Engine
app.set("view engine", "ejs")
//End Of Setting View Engine

//Serving Assets Folder
app.use("/assets", express.static("assets"))
//End of Serving Assets Folder

// CREATING ROUTES

//Creating The Home Route
app.get("/", (req, res)=>{
    res.render("index")
})
//End of Creating Home Route

//Creating Success Route
app.use(express.urlencoded({extended: true}));
app.post("/success", (req, res)=>{
    const details = req.body
    console.log(details)
    


    run()
    async function run(){
        try{
            const blogs = new blogSchema({
                name: details.username,
                title: details.title,
                body: details.body
            })
            await blogs.save()
        }catch{
            console.log("An error occured!")
        }
    }

    res.render("success")
})
// End of Creating Sucess Route


//END OF CREATING ROUTES


//SAVING TO MONGODB
const blogSchema= require("./blogSchema")
//SAVED TO MONGODB

app.get("/blogs", async(req, res)=>{
    const allPosts = await blogSchema.find()

    res.render("blogs", {posts: allPosts})
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log('App started on port 3000 ${port}');
})
