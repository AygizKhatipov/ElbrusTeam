'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Groups', [{
      team: 'Киты',
      start: '2024-05-20',
      end: '2024-07-19',
      },
     {
      team: 'Сойки',
      start: '2024-06-10',
      end: '2024-08-09',
      
     },
     {
      team: 'Рыси',
      start: '2024-07-01',
      end: '2024-09-30',
      },
     {
      team: 'Волки',
      start: '2024-09-12',
      end: '2024-11-11',
    },], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Groups', null, {});
     
  }
};
