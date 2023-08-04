'use strict';
const { Model } = require('sequelize');

const orderItemState = {
    ORDERED: 0,
    PENDING: 1,
    COMPLETED: 2,
    CANCELED: 3,
};

module.exports = (sequelize, DataTypes) => {
    class orderItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    orderItem.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            item_id: {
                type: Sequelize.INTEGER,
            },
            amount: {
                type: Sequelize.INTEGER,
            },
            state: {
                type: Sequelize.ENUM(Object.values(orderItemState)),
                defaultValue: orderItemState.ORDERED,
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
            modelName: 'orderItem',
        }
    );
    return orderItem;
};
