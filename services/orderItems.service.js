const OrderItemRepository = require('../repositories/orderItems.repository');
const ItemRepository = require('../repositories/items.repository');
const { sequelize } = require('../models');

class OrderItemService {
    OrderItemRepository = new OrderItemRepository();
    ItemRepository = new ItemRepository();

    createOrderItem = async (item_id, amount, state) => {
        const createOrderItem = await this.orderItemRepository.createOrderItem(item_id, amount, state);
        return new ServiceReturn('리뷰를 수정하였습니다.', 201, true);
    };

    // 발주 상태를 수정하는 것을 구현해야한다. (ordered, pending, canceled, completed)
    updateOrderItem = async (item_id, amount, state) => {
        const findItem = await this.orderItemRepository.findId(id);
        await this.orderItemRepository.updateOrderItem(item_id, amount, state);
        return new ServiceReturn('리뷰를 수정하였습니다.', 201, true);
    };
}
