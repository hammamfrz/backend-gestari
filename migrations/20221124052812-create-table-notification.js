'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('notification', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    notif_mess: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('notification');
  }
};
