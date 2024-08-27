'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Users', [{
      firstName: 'Георгий',
      lastName: 'Бабаян',
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
      firstName: 'Юрий',
      lastName: 'Плисковский',
      email: 'yrii@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 3
    },
    {
      firstName: 'Андрей',
      lastName: 'Бережков',
      email: 'andrey@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 4
    },
    {
      firstName: 'Владислав',
      lastName: 'Пономаренко',
      email: 'vlad@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 4
    },
    {
      firstName: 'Максим',
      lastName: 'Кошеутов',
      email: 'max@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 4
    },
    {
      firstName: 'Даниил',
      lastName: 'Джаваскриптович',
      email: 'js@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 4
    },
    {
      firstName: 'Маша',
      lastName: 'Пономаренко',
      email: 'masha@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 5
    },
    {
      firstName: 'Рома',
      lastName: 'Яковлев',
      email: 'roma@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 5
    },
    {
      firstName: 'Пага',
      lastName: 'Аверин',
      email: 'paga@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 5
    },
    {
      firstName: 'Андрей',
      lastName: 'Капралов',
      email: 'andrey1@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 5
    },
    {
      firstName: 'Андрей',
      lastName: 'Загребельников',
      email: 'andrey2@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 5
    },
    {
      firstName: 'Евгений',
      lastName: 'Пигорев',
      email: 'evg@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 5
    },
    {
      firstName: 'Евстафий',
      lastName: 'Лефтеряди',
      email: 'stashek@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 5
    },
    {
      firstName: 'Никита',
      lastName: 'Щитов',
      email: 'nikita@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 5
    },
    {
      firstName: 'Надя',
      lastName: 'Крутикова',
      email: 'nadia@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 6
    },
    {
      firstName: 'Саша',
      lastName: 'Куликова',
      email: 'sasha@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 6
    },
    {
      firstName: 'Анна',
      lastName: 'Кулешова',
      email: 'anna@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 6
    },
    {
      firstName: 'Мария',
      lastName: 'Елисеева',
      email: 'eliseeva@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 6
    },
    {
      firstName: 'Полина',
      lastName: 'Вахаева',
      email: 'polina@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 7
    },
    {
      firstName: 'Амантур',
      lastName: 'Акматов',
      email: 'amantyr@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 7
    },
    {
      firstName: 'Наташа',
      lastName: 'Сокол',
      email: 'sokol@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 7
    },
    {
      firstName: 'Нэтик',
      lastName: 'Шифрина',
      email: 'nata@mail.ru',
      password: await bcrypt.hash('123', 10),
      isMember: true,
      roleId: 7
    },], {});
    },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
