'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Statuses', [{
     status: 'Учащийся',
     },
     {
      status: 'Повтор',
     },
     {
      status: 'Самоподготовка',
     },
     {
      status: 'Отчислен',
     },
     {
      status: 'Выпустился',
     }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Statuses', null, {});
     
  }
};
