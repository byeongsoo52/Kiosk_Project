const { Option } = require('../models');

class OptionRepository {
    createOption = async (extra_price, shot_price, hot) => {
        const createOptionData = await Option.create({
            extra_price,
            shot_price,
            hot,
        });

        return createOptionData;
    };

    getOptionById = async (optionId) => {
        const option = await Option.findByPk(optionId);
        return option;
    };

    deleteOption = async (id) => {
        const deleteOptionData = await Options.destroy({
            where: { id },
        });

        return deleteOptionData;
    };
}

module.exports = OptionRepository;
