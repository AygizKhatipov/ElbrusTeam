'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Events', [{
      date: '2024-08-30',
      title: 'Выпускной Рысек',
      description: "Lorem ipsum dolor sit amet"
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Events', null, {});
     
  }
};
