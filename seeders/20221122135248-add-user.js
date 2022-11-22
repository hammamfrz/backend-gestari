'use strict';

const toJSON = require("../utils/toJson");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const json = toJSON("user.csv");
    console.log(json);
    return queryInterface.bulkInsert("user", json, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
