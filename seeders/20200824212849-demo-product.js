'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Product',
      [
        {
          type: 'tshirt',
          price: false,
          name: 'Red Bamboo',
          description: 'This is a perfect fit shirt',
          size: 'M',
          quantity: 30,
        },
        {
          type: 'hat',
          price: 10.0,
          name: 'NY',
          description: 'This is a perfect fit hat',
          size: 'M',
          quantity: 15,
        },
        {
          type: 'mug',
          price: false,
          name: 'git add, git commit, git push',
          description: 'Coding Mug',
          size: null,
          quantity: 30,
        },
        {
          type: 'pens',
          price: false,
          name: 'G-Tech 0.3',
          description: 'Fine pen',
          size: null,
          quantity: 30,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  },
};
