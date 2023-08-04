const { ItemOrderCustomer } = require('../models');

class ItemOrderCustomerRepository {
    createItemOrderCustomer = async (itemOrderCustomerData) => {
        const createItemOrderCustomerData = await ItemOrderCustomer.create(itemOrderCustomerData);

        return createItemOrderCustomerData;
    };

    getItemsByOrderCustomerId = async (id) => {
        const orderItems = await ItemOrderCustomer.findAll({
            where: { orderCustomerId: id },
        });
        return orderItems;
    };

    deleteItemOrderCustomersByOrderCustomerId = async (orderCustomerId, transaction) => {
        await ItemOrderCustomer.destroy({
            where: { orderCustomerId },
            transaction,
        });
    };
}

module.exports = ItemOrderCustomerRepository;
