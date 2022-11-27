'use strict';

const toJSONJourney = require("../utils/toJsonJourney");


module.exports = {
  async up(queryInterface, Sequelize) {
    const json = toJSONJourney("journey.csv");
    console.log(json);
    return queryInterface.bulkInsert("journey", json, {});
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
