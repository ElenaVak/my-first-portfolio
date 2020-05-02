const path = require("path");
const express = require("express");
const port = 3000

const app = express();
app.use(express.static('public'));

app.get('/hello', function(req, res) {
    res.send("Hello There!")
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/about.html'))
})


app.listen(port, function (){
    console.log(`Example app lisening on port ${port}!`)
})