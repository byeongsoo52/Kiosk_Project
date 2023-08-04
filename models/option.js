'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Option extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Option.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            extra_price: {
                type: Sequelize.INTEGER,
            },
            shot_price: {
                type: Sequelize.INTEGER,
            },
            hot: {
                type: Sequelize.BOOLEAN,
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
            modelName: 'Option',
        }
    );
    return Option;
};
