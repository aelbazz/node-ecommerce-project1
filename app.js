const express = require('express');
const app = express();
const path = require("path");
const contactRouter= require('./contact.router')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'assets')))

app.get("/", (req, res, next) => {
    res.render("index")
})

app.use("/contact",contactRouter)

app.use((req, res, next) => {
    res.send("<h1>404 Not found </h1> </br><a href=\"/\">Home</a>")
})
app.listen("3000", () => {
    console.log("http://localhost:3000")
})