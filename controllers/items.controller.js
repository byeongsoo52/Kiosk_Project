const ItemService = require('../services/items.service');

class ItemsController {
    itemService = new ItemService();

    createItem = async (req, res) => {
        try {
            const { name, option_id, price, type, amount } = req.body;
            const { status, message, result } = await this.itemService.createItem(name, option_id, price, type, amount);
            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };

    getItems = async (req, res) => {
        try {
            const { status, message, result } = await this.itemService.findAllItem();

            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };

    deleteItem = async (req, res) => {
        try {
            const { id } = req.params;
            const { status, message, result } = await this.itemService.deleteItem(id);

            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };

    updateItem = async (req, res) => {
        try {
            const { id } = req.params;
            const { name, option_id, price, type, amount } = req.body;
            const { status, message, result } = await this.itemService.updateItem(id, name, option_id, price, type, amount);
            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };
}

module.exports = ItemsController;
