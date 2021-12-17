const express = require('express');
const router = express.Router();
// const body = require('body');
const bodyParser = require('body-parser');
const bodyParserMW = bodyParser.urlencoded({
    extended: true
});

router.get("/", (req, res, next) => {
    res.render("contact")
})
// router.post("/", (req, res, next) => {
//     let body = [];
//     req.on('data', (chunck) => {
//         body.push(chunck)
//     })
//     req.on('end', () => {
//         body = Buffer.concat(body).toString();
//         console.log(body)
//         res.end('Done ');
//     })
// })
// router.post("/", (req, res, next) => {
//     body(req, res, function (err, body) { 
//         res.end(body)
//     })
// })
router.post("/", bodyParserMW, (req, res, next) => {
    console.log("Form Data",req.body);
    res.end("Done ")

})

module.exports = router;