const orderCustomerService = require('../services/orderCustomers.service');

class orderCustomersController {
    orderCustomerService = new orderCustomerService();

    createOrderCustomerItem = async (req, res) => {
        try {
            const { customerId, orderItem } = req.body;
            const { status, message, result } = await this.orderCustomerService.createOrderCustomerItem(customerId, orderItem);
            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };

    completeOrder = async (req, res, next) => {
        const { id } = req.params;
        try {
            await this.orderCustomerService.completeOrder(id);
            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };

    cancelOrder = async (req, res, next) => {
        const { id } = req.params;
        try {
            await this.orderCustomerService.cancelOrder(id);
            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };
}

module.exports = OrderCustomersController;
