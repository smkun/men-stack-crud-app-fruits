// Load environment variables from .env file
const dotenv = require("dotenv");
dotenv.config();

// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const Fruit = require("./models/fruit.js");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");

// Create Express application
const app = express();

// Set up middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

// Connect to MongoDB using the connection string from .env file
mongoose.connect(process.env.MONGODB_URI);

// Start the server and listen on port 3001
app.listen(3001, () => {
    console.log("Listening on port 3001");
});

// Route for the home page
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

// Route for rendering the new fruit form
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new");
});

// Route for handling the creation of a new fruit
app.post("/fruits", async (req, res) => {
    console.log(req.body);
    // Convert the isReadyToEat checkbox value to a boolean
    if (req.body.isReadyToEat === "on") {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    // Create a new fruit in the database
    await Fruit.create(req.body);
    // Redirect to the fruits index page after creation
    res.redirect("/fruits");
});

// Route for retrieving all fruits and rendering the fruits index page
app.get("/fruits", async (req, res) => {
    const allFruits = await Fruit.find();
    res.render("fruits/index.ejs", { fruits: allFruits });
});

// Route for retrieving a specific fruit by ID and rendering its details page
app.get("/fruits/:fruitId", async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId);
    res.render("fruits/show.ejs", { fruit: foundFruit });
});

// Route for deleting a specific fruit by ID
app.delete("/fruits/:fruitId", async (req, res) => {
    await Fruit.findByIdAndDelete(req.params.fruitId);
    // Redirect to the fruits index page after deletion
    res.redirect("/fruits");
});

// Route for rendering the edit form for a specific fruit
app.get("/fruits/:fruitId/edit", async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId);
    res.render("fruits/edit.ejs", { fruit: foundFruit });
});

// Route for handling the update of a specific fruit
app.put("/fruits/:fruitId", async (req, res) => {
    // Convert the isReadyToEat checkbox value to a boolean
    if (req.body.isReadyToEat === "on") {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    // Update the fruit in the database
    await Fruit.findByIdAndUpdate(req.params.fruitId, req.body);
    // Redirect to the fruit's details page after update
    res.redirect(`/fruits/${req.params.fruitId}`);
});
