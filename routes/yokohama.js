const express = require("express");
const router = express.Router();

const yokohamaController = require("../controllers/yokohama");

router.get("/", yokohamaController.index);
router.get("/:id", yokohamaController.showID);
router.delete('/:id', yokohamaController.delete);
router.post('/', yokohamaController.create);
router.put('/:id', yokohamaController.update);

module.exports = router;