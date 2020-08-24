'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Product', [{
        type: 'tshirt',
        price: false,
        name: 'Red Bamboo',
        description: "This is a perfect fit shirt",
        size: "M",
        quantity: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Product', null, {});
  }
};
