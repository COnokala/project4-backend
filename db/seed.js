const yokohamaJsonData = require('./data/yokohama.json');
const osakaJsonData = require('./data/osaka.json');

const YOKO = require('../models/yoko');
const OsakaPhoto = require('../models/osaka');
const soloPhoto = require('../models/soloPhoto')

YOKO.deleteMany({}).then(() => {
    YOKO.create(yokohamaJsonData).then((photos) => {
        console.log(photos)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

OsakaPhoto.deleteMany({}).then(() => {
    OsakaPhoto.create(osakaJsonData).then((photos) => {
        console.log(photos)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

soloPhoto.deleteMany({})