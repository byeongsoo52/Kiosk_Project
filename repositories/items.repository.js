const { Item } = require('../models');

class ItemRepository {
    findAllItems = async () => {
        const items = await Item.findAll();

        return items;
    };

    createItem = async (name, option_id, price, type, amount) => {
        const createItemData = await Item.create({ name, option_id, price, type, amount });

        return createItemData;
    };

    updateItem = async (name, option_id, price, type, amount) => {
        const updateItemData = await Item.update(
            { name, option_id, price, type, amount },
            {
                where: { id },
            }
        );
        return updateItemData;
    };

    deleteItem = async (id) => {
        return await Item.destroy({ where: { id } });
    };
}
