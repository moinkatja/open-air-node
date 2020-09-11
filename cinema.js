const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
    id: String,
    name: String,
    region: String,
    postcode: Number,
    city: String,
    street: String, 
    pic: String,
    tel: String,
})

const Cinema = mongoose.model("cinema", CinemaSchema);

module.exports = Cinema;