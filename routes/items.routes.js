const express = require("express");
const router = express.Router();

const ItemsController = require("../controllers/items.controller");
const itemsController = new ItemsController();

router.get("/", itemsController.getItems);
router.post("/", itemsController.createsItem);

module.exports = router;
