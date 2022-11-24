'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('struk_penerimaan', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_penerimaan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'penerimaan',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_katalog: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'katalog',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('struk_penerimaan');
  }
};
