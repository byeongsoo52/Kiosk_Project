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
        // 이름, 가격이없을 경우 ‘{name}을 입력해주세요’라는 메세지 반환
        if (!name || !price) {
            throw new Error('상품명, 가격을 입력하세요.');
        }
        // 알맞은 타입이 아닐경우 ‘알맞은 타입을 지정해주세요’라는 메세지 반환

        await this.ItemRepository.updateItem(name, option_id, price, type, amount);
        return new ServiceReturn('리뷰를 수정하였습니다.', 201, true);
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
