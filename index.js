const path = require("path");
const express = require("express");
var exphbs = require('express-handlebars');
const port = 3000

const app = express();

app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home')
});

app.get('/about', function(req, res) {
    res.render('about')
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