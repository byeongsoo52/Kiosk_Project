'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const orderItemState = {
            ORDERED: 'ORDERED',
            PENDING: 'PENDING',
            COMPLETED: 'COMPLETED',
            CANCELED: 'CANCELED',
        };
        await queryInterface.createTable('orderItems', {
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
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('orderItems');
    },
};
