const OrderItemService = require('../services/orderItems.service');

class OrderItemsController {
    orderItemService = new OrderItemService();

    createOrderItem = async (req, res) => {
        try {
            const { item_id, amount, state } = req.body;
            const { status, message, result } = await this.orderItemService.createOrderItem(item_id, amount, state);
            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };

    updateOrderItem = async (req, res) => {
        try {
            const { id } = req.params;
            const { item_id, amount, state } = req.body;
            const { status, message, result } = await this.orderItemService.updateOrderItem(id, item_id, amount, state);
            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };
}

module.exports = OrderItemsController;
