'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('itemOrderCustomers', {
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
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('itemOrderCustomers');
    },
};
