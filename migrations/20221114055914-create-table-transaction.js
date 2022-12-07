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
        references: {         // Transaction belongsTo User 1:1
          model: 'users',
          key: 'id_member'
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
      kertas_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      plastik_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kaca_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      logam_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      khusus_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('PENDING', 'SUCCESS', 'FAILED'),
        defaultValue: 'PENDING',
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
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('transaction');
  }
};
