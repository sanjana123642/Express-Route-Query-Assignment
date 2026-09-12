const express = require("express");

const app = express();
const PORT = 3000;

// Task 1: Basic Routes

app.get("/", (req, res) => {
    console.log(req.method, req.url);
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    console.log(req.method, req.url);
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    console.log(req.method, req.url);
    res.send("This is Contact Page");
});

// Task 2: Route Parameter

app.get("/user/:name", (req, res) => {
    console.log(req.method, req.url);

    const name = req.params.name;
    res.send(`Hello ${name}`);
});

// Task 3: Multiple Route Parameters

app.get("/product/:id/:category", (req, res) => {
    console.log(req.method, req.url);

    const id = req.params.id;
    const category = req.params.category;

    res.send(`Product ID: ${id}, Category: ${category}`);
});

// Task 4: Query Parameters

app.get("/search", (req, res) => {
    console.log(req.method, req.url);

    const name = req.query.name;
    const role = req.query.role;

    res.send(`Name: ${name}, Role: ${role}`);
});

// Start Server

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});