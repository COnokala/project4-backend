const express = require("express");
const router = express.Router();

const photoController = require("../controllers/soloPhoto");

router.get("/", photoController.index);
router.get("/:id", photo.showID);
router.delete('/:id', photoController.delete);
router.post('/', photoController.create)
router.put('/:id', photoController.update)

module.exports = router;
