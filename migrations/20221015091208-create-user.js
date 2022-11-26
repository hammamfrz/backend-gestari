'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_member: {
        type: Sequelize.STRING,
        unique: true,
        defaultValue: null,
        allowNull: true,
      },
      NIK: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      birthdate: {
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true,
      },
      birthplace: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM('L', 'P'),
        defaultValue: null,
        allowNull: true,
      },
      role: {
        type: Sequelize.ENUM('admin', 'user', 'superadmin'),
        defaultValue: 'user',
        allowNull: true,
      },
      balance: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      profile_picture: {
        type: Sequelize.STRING,
        defaultValue: null,
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
    await queryInterface.dropTable('users');
  }
};
