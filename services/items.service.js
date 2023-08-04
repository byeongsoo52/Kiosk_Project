const ItemRepository = require('../repositories/items.repository');

class ItemService {
    ItemRepository = new ItemRepository();

    findAllItem = async () => {
        const allItem = await this.ItemRepository.findAllItem();
        const allItemData = allItem.map((item) => {
            return {
                name: item.name,
                option_id: item.option_id,
                price: item.post,
                type: item.type,
                amount: item.amount,
                createdAt: item.created_at,
                updatedAt: item.updated_at,
            };
        });
    };

    createItem = async (name, option_id, price, type, amount) => {
        const createItemData = await this.itemRepository.createItem(name, price, type, optionId);
        if (!name) {
            throw new Error('상품 이름을 입력하세요');
        } else if (!price) {
            throw new Error('상품 가격을 입력하세요');
        } else if (!type) {
            throw new Error('상품 타입을 입력하세요');
        } else {
            return createItemData;
        }
    };

    deleteItem = async (id) => {
        await this.ItemRepository.deleteItem(id);
        return new ServiceReturn('아이템 삭제가 완료되었습니다.', 200);
    };

    updateItem = async (name, option_id, price, type, amount) => {
        const findItem = await this.itemRepository.findId(id);
        await this.itemRepository.updateItem(name, option_id, price, type, amount);
        return new ServiceReturn('아이템을 수정하였습니다.', 201, true);
    };
}

module.exports = ItemService;
