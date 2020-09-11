const express = require("express");
const router = express.Router();
const Cinema = require("./cinema");


router.get("/cinemas", (req, res) => {
   Cinema.find({})
   .then(cinema => {
       res.send(cinema);
   })

});

router.get("/search", (req, res, next) => {
    const searchedField = req.query.bundesland;
    Cinema.find({bundesland:{$regex: searchedField, $options: "$i"}})
    .then(cinema => {
        res.send(cinema);
    })
 });

router.post("/cinemas", (req, res) => {
    Cinema.create(req.body)
    .then(cinema => {
        res.send(cinema);
    });

});

router.put("/cinemas/:id", (req, res) => {
   Cinema.findByIdAndUpdate({_id: req.params.id}, req.body)
   .then(() =>{
       Cinema.findOne({_id:req.params.id})
       .then(cinema => {
           res.send(cinema);
       })
   } )
});

router.delete("/cinemas/:id", (req, res) => {
    Cinema.deleteOne({_id: req.params.id})
    .then(cinema => {
        res.send(cinema);
    })

});

module.exports = router;