const express = require('express');
const router = express.Router();

const ItemsController = require('../controllers/items.controller');
const itemsController = new ItemsController();

router.get('/', itemsController.getItems);
router.post('/', itemsController.createsItem);
router.get('/:type', itemsController.getItemsByType);
router.delete('/:id', itemsController.deleteItem);
router.put('/:id', itemsController.updateItem);

module.exports = router;
