const soloPhoto = require("../models/soloPhoto");

module.exports = {
  index: (req, res) => {
    soloPhoto.find({}).then(photo => {
      res.json(photo)
    });
  },
  showTitle: (req, res) => {
    soloPhoto.findOne({
        title: req.params.title
    })
    .then(card => {
        res.json(card)
    })
  },
  create: (req, res) => {
    const newPhoto = req.body;
    
    soloPhoto.create(newPhoto).then(photo => res.json(photo));
  },
  delete: (req, res) => {
      soloPhoto.findOneAndDelete({title: req.params.title})
        .then(photo => {
            res.json(photo)
        })
  },
  update:(req, res) => {
      soloPhoto.findOneAndUpdate({title: req.params.title}, req.body)
        .then(photo => {
            res.json(photo)
        })
  },
}