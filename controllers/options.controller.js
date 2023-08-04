const OptionService = require('../services/options.service');

class OptionsController {
    OptionService = new OptionService();

    createOption = async (req, res) => {
        const { extra_price, shot_price, hot } = req.body;
        try {
            const createOptionData = await this.optionService.createOption(extra_price, shot_price, hot);
            res.status(status).json({ data: createOptionData });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };

    updateItem = async (req, res) => {
        try {
            const { id } = req.params;
            const { name, option_id, price, type, amount } = req.body;
            const { status, message, result } = await this.itemService.updateItem(id, name, option_id, price, type, amount);
            res.status(status).json({ message, result });
        } catch (error) {
            if (error.status) return res.status(error.status).json({ message: error.message });
            console.error(error);
            return res.status(500).json({ message: '오류가 발생하였습니다.' });
        }
    };
}

module.exports = OptionsController;
