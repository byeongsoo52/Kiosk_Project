const OptionRepository = require('../repositories/options.repository');
const { Option } = require('../models');

class OptionService {
    optionRepository = new OptionRepository();

    createOption = async (extra_price, shot_price, hot) => {
        const createOptionData = await this.optionRepository.createOption(extra_price, shot_price, hot);
        return createOptionData;
    };

    getAllOptions = async (req, res) => {
        try {
            const options = await Option.findAll();
            return options;
        } catch (error) {
            res.status(500).json({ message: '서버 에러' });
        }
    };
    deleteOption = async (id) => {
        await this.optionRepository.deleteOption(id);
        return new ServiceReturn('옵션 삭제가 완료되었습니다.', 200);
    };
}

module.exports = OptionService;
