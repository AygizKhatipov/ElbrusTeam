'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Points', [
      {
        point: 30,
        userId: 1
      },
      {
        point: 30,
        userId: 2
      },
      {
        point: 30,
        userId: 3
      },
      {
        point: 30,
        userId: 4
      },
      {
        point: 30,
        userId: 5
      },
      {
        point: 30,
        userId: 6
      },
      {
        point: 30,
        userId: 7
      },
      {
        point: 30,
        userId: 8
      },
      {
        point: 30,
        userId: 9
      },
      {
        point: 30,
        userId: 10
      },
      {
        point: 30,
        userId: 11
      },
      {
        point: 30,
        userId: 12
      },
      {
        point: 30,
        userId: 13
      },
      {
        point: 30,
        userId: 14
      },
      {
        point: 30,
        userId: 15
      },
      {
        point: 30,
        userId: 16
      },
      {
        point: 30,
        userId: 17
      },
      {
        point: 30,
        userId: 18
      },
      {
        point: 30,
        userId: 19
      },
      {
        point: 30,
        userId: 20
      },
      {
        point: 30,
        userId: 21
      },
      {
        point: 30,
        userId: 22
      },
      {
        point: 30,
        userId: 23
      },
      {
        point: 30,
        userId: 24
      },
      {
        point: 30,
        userId: 25
      },
      {
        point: 30,
        userId: 26
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Points', null, {});
     
  }
};
