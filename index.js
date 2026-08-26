const express = require("express");


// init server
const app = express();

// port
const port = 3000;

// 2
app.get("/", (req, res) => {
    res.send("Welcome to Camper Bot's homepage!")
})

// 3
app.get("/hobbies", (req, res) => {
    res.send("I cycle, go boating, and play guitar.")
})

// 4
app.get("/skills", (req, res) => {
    res.send("JavaScript, Node.js, and Express.js!")
})

// 5
app.get("/api/profile", (req, res) => {
    res.json({
        name: "Camper Bot",
        hobbies: ['cycling', 'boating', 'guitar'],
        skills: ['JavaScript', 'Node.js', 'Express.js']
    })
})


// running server
app.listen(port, () => {
    console.log(`Server is running on http://localhost${port}`)
})
