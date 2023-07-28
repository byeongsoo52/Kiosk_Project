const { OrderItem } = require('../models');

class OrderItemRepository {
    createOrderItem = async (item_id, amount, state) => {
        const createOrderItemData = await Item.create({ item_id, amount, state });

        return createOrderItemData;
    };

    updateOrderItem = async (item_id, amount, state) => {
        const updateOrderItem = await OrderItem.update(
            { item_id, amount, state },
            {
                where: { id },
            }
        );
        return updateOrderItem;
    };
}

module.exports = OrderItemRepository;
