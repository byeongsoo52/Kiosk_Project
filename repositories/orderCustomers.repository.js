const { OrderCustomer } = require('../models');

class OrderCustomerRepository {
    createOrderCustomer = async (state) => {
        const createOrderCustomerData = await OrderCustomer.create({ state });

        return createOrderCustomerData;
    };

    updateOrderCustomerState = async (id, transaction) => {
        await OrderCustomer.update(
            { state: true },
            {
                where: { id },
                transaction,
            }
        );
    };

    deleteOrderCustomer = async (id, transaction) => {
        await OrderCustomer.destroy({
            where: { id },
            transaction,
        });
    };
}

module.exports = OrderCustomerRepository;
