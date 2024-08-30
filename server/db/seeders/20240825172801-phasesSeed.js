'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Phases', [{
    phase: '0',
     description: 'Все самое лучшее только начинается'
     },
     {
    phase: '1',
    description: 'Это база, братья и сестры!'
       },
       {
    phase: '2',
    description: 'Ты думаешь, что ты понимаешь, но ты не понимаешь, а когда ты не понимаешь, то внезапно понимаешь'
         },
         {
    phase: '3',
    description: 'Финишная прямая. Что такое "сон"?'
           }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Phases', null, {});
     
  }
};
