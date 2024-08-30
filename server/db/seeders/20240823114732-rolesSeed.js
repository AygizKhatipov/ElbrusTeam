'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
  await queryInterface.bulkInsert('Roles', [{
    role: "Разработчик",
  },
  {
    role: "Администратор",
  },
  {
    role: "Директор",
  },
  {
    role: "Преподаватель",
  },
  {
    role: "Выпускник",
  },
  {
     role: "Карьерный коуч",
  },
  {
      role: "Студент",
  },
  
  ]
  , {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Roles', null, {});
     
  }
};
