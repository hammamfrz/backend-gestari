'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transaction', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_katalog: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_katalog: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dateRequired: {
        type: Sequelize.DATE,
        allowNull: true,
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
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('transaction');
  }
};
