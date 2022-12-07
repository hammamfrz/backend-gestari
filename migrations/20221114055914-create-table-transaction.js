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
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'users',
          key: 'id' // Transaction belongsTo User 1:1

        }
      },
      id_katalog: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // Transaction belongsTo Katalog 1:1
          model: 'katalog',
          key: 'id_katalog'
        }
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
