'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Points', [{
       point: '30',
       userId: '2'
      },
      {
       point: '30',
       userId: '3'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Points', null, {});
     
  }
};
