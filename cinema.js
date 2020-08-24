const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
    id: Number,
    name: String,
    postcode: Number,
    city: String,
    street: String, 
    tel: String,
})

const Cinema = mongoose.model("cinema", CinemaSchema);

module.exports = Cinema;