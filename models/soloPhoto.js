const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const soloPhotoSchema = new Schema({
    tags: String,
    largeImageURL: String,
    id: Number,
    webformatURL: String
});

const soloPhoto = mongoose.model("soloPhoto", soloPhotoSchema);

module.exports = soloPhoto;