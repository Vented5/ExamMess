const express = require("express");

const exam = new express();
const port = 3001;


let tasks = [
    { "id": 1, "title": "Math homework", "status": 1 }, 
    { "id": 2, "title": "learn german", "status": 0},
    { "id": 3, "title": "practice python", "status": 1}
]; 

// ----------- Configuration / Middlewares ----------
exam.use(express.json());

// ------------ ROUTES ----------------
exam.get("/", (req, res) => {
    res.send(tasks);
});

exam.get("/:id", (req, res) => {
    let id = req.params.id;
    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].id == id){
            res.send(tasks[i]);
        }
    }
});

exam.post("/", (req, res) => {
    let newValues = req.body.array
    newValues.forEach(element => {
        tasks.push(element);    
    });
    
    res.send(tasks);
});

exam.patch("/:id", (req, res) => {
    let id = req.params.id
    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].id == id){
            tasks[i] = req.body;
            res.send(tasks[i]);
        }
    }
});

exam.delete("/:id", (req, res) => {
    let id = req.params.id;
    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].id == id){
            tasks.splice(i, 1);
        }
    }
    res.send(tasks);
});

// ------------ Server inizialization ----------------
exam.listen(port, function (req, res){
    console.log("Yeah it seems to be working on port: " + port);
});

