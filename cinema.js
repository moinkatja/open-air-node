const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
    name: String,
    postcode: Number,
    city: String,
    street: String
})

const Cinema = mongoose.model("cinema", CinemaSchema);

module.exports = Cinema;