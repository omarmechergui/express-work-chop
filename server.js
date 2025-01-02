const express = require('express');
const path = require("path");
const app = express();
const port = 5000;
const date = new Date();
const day = date.getDay();
const hour = date.getHours();
const verify = (req, res, next) => {
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 16) {
        next();
    }

    else {
        res.send("we are closed now");
    }
}
app.get("/",verify, (rec, res) => {
    res.sendFile(path.join(__dirname, "puplic", 'home.html'))
})
app.get("/contact",verify, (rec, res) => {
    res.sendFile(path.join(__dirname, "puplic", 'contact.html'))
})
app.get("/about",verify, (rec, res) => {
    res.sendFile(path.join(__dirname, "puplic", 'about.html'))
})

app.listen(port, console.log("server is raninng ..."));