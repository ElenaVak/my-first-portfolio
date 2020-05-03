const path = require("path");
const express = require("express");
const port = 3000

const app = express();
app.use(express.static('public'));

app.get('/hello', function(req, res) {
    res.send("Hello There!")
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'))
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/about.html'))
});

app.get('/experience', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/experience.html'))
});

app.get('/skills', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/skills.html'))
});

app.listen(port, function (){
    console.log(`Example app lisening on port ${port}!`);
});