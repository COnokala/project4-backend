const express = require('express')
const router = express.Router();

router.use('/solo', require('./soloPhoto'));
router.use('/yokohama', require('./yoko'));
router.use('/osaka', require('./osaka'))

router.all('*', (req, res) => {
    res.status(400).send();
})

module.exports = router;