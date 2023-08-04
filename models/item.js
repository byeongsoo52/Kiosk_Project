'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class item extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    item.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            option_id: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            type: {
                type: Sequelize.ENUM,
                values: ['coffee', 'juice', 'food'],
            },
            amount: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        },
        {
            sequelize,
            modelName: 'item',
        }
    );
    return item;
};
