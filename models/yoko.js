const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const yokoSchema = new Schema({
    tags: String,
    largeImageURL: String,
    id: Number,
    webformatURL: String
});

const YOKO = mongoose.model("YOKO", yokoSchema)

module.exports = YOKO