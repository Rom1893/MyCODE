const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path")
const campground = require("./models/campground")

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connected")
})

app.set("view engine", "ejs" );
app.set("views", path.join(__dirname, "views") )

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})
/////////////////////////////////////////////////////////
//////////////////////STARTS HERE////////////////////////
/////////////////////////////////////////////////////////

app.get("/", (req, res)=> {
    res.render ("home")
})

app.get("/makecampground", async(req, res)=> {
    const camp = new campground({
        title: "bigexdi",
        description: "lmao nice camping bruh"
    })
    await camp.save();
    res.send(camp);
})