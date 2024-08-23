'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Users', [{
      firstName: 'Owner',
      lastName: 'Owner',
      email: 'Owner@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 1
    },{
      firstName: 'Лика',
      lastName: 'Балашова',
      email: 'be.angelface@gmail.com',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 1
    },{
      firstName: 'Вероника ',
      lastName: 'Авдеева',
      email: 'nika@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 1
    },
    {
      firstName: 'Айгиз',
      lastName: 'Хатипов',
      email: 'hatipov@mail.com',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 1
    },
    {
      firstName: 'Милана',
      lastName: 'Берсекова',
      email: 'milana@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 2
    },
    {
      firstName: 'Андрей',
      lastName: 'Бережков',
      email: 'andrey@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 4
    }], {});
    },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
