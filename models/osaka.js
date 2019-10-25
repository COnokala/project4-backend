const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const osakaSchema = new Schema ({
	tags: String,
    largeImageURL: String,
    id: Number,
    webformatURL: String
});

const OsakaPhoto = mongoose.model("OsakaPhoto", osakaSchema)

module.exports = OsakaPhoto