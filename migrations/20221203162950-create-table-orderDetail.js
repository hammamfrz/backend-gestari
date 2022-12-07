'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderDetail', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_katalog: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
  });
  Transaction.associate = (models) => {
    // 1 to 1 with orderDetail
    Transaction.hasOne(models.orderDetail, {
      foreignKey: 'transactionId',
    });
  }
},
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orderDetail');
}};
