'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class itemOrderCustomer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    itemOrderCustomer.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            item_id: {
                type: Sequelize.INTEGER,
                reference: {
                    model: 'Item',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            order_customer_id: {
                type: Sequelize.INTEGER,
                reference: {
                    model: 'OrderCustomer',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            amount: {
                type: Sequelize.INTEGER,
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
            modelName: 'itemOrderCustomer',
        }
    );
    return itemOrderCustomer;
};
