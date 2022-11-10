"use strict";

const toJSON = require("../utils/toJson");


module.exports = {
  async up(queryInterface, Sequelize) {
    const json = toJSON("katalog.csv");
    console.log(json);
    return queryInterface.bulkInsert("katalog", json, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
