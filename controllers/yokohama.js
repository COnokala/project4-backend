const YOKO = require('../models/yokohama')

module.exports = {
    index: (req, res) => {
        YOKO.find({}).then(photo => {
            res.json(photo);
        })
    },
    showTitle: (req, res) => {
        YOKO.findOne({
            title: req.params.title
        })
        .then(card => {
            res.json(card)
        })
    }
}