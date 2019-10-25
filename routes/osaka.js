const express = require("express");
const router = express.Router();

const osakaController = require("../controllers/osaka");

router.get('/', osakaController.index)
router.get("/:id", osakaController.showID);
router.delete('/:id', osakaController.delete);
router.post('/', osakaController.create);
router.put('/:id', osakaController.update);


module.exports = router;
