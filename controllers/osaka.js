const Osaka = require('../models/marsRover');

module.exports = {
  index: (req, res) => {
    Osaka.find({}).then(rover => {
      res.json(rover)
    });
  },
  showID: (req, res) => {
    Osaka.findOne({
        id: req.params.id
    })
    .then(card => {
        res.json(card)
    })
}
}