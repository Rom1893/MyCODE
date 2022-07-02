const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path")
const campground = require("./models/campground")
const methodOverride = require("method-override")

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connected")
});

app.set("view engine", "ejs" );
app.set("views", path.join(__dirname, "views") );
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
});
/////////////////////////////////////////////////////////
//////////////////////STARTS HERE////////////////////////
/////////////////////////////////////////////////////////

app.get("/", (req, res)=> {
    res.render ("home")
});

app.get("/campgrounds", async (req, res)=> {
    const campgrounds = await campground.find({});
    res.render("campgrounds/index", {campgrounds})
});

app.get("/campgrounds/new", (req, res)=> {
    res.render("campgrounds/new")
});

app.post("/campgrounds", async (req, res)=> {
    const Newcampground = new campground(req.body.campground);
    await Newcampground.save();
    res.redirect(`/campgrounds/${Newcampground._id}`)    

});

app.get("/campgrounds/:id", async (req, res)=> {
    const {id} = req.params;
    const Onecampground = await campground.findById(id);
    res.render ("campgrounds/show", {Onecampground});
});

app.get("/campgrounds/:id/edit", async(req, res)=>{
    const {id} = req.params;
    const Onecampground = await campground.findById(id);
    res.render ("campgrounds/edit", {Onecampground});
});

app.put("/campgrounds/:id", async(req, res) =>{
    const {id} = req.params;
    const campgroundEdit = await campground.findByIdAndUpdate(id, {...req.body.campground});
    res.redirect(`/campgrounds/${campgroundEdit._id}`)  
});

app.delete("/campgrounds/:id", async(req, res) => {
    const {id} = req.params;
    await campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
});

