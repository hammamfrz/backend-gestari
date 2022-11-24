'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('slip_setoran', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_setoran: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_katalog: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('slip_setoran');
  }
};
