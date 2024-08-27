'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Events', [{
      date: '2024-08-30',
      title: 'Выпускной Рысек',
      description: "Lorem ipsum dolor sit amet",
      pic: 'https://i.postimg.cc/5yKDKpLr/IMG-9061.jpg'
     },
     {
      date: '2024-09-02',
      title: 'Встречаем новеньких!',
      description: "Lorem ipsum dolor sit amet",
      pic: 'https://static.tildacdn.com/tild6136-6338-4034-b335-626631626263/iStock-939342086.jpg'
     },
     {
      date: '2024-09-06',
      title: 'Мафия',
      description: "Lorem ipsum dolor sit amet",
      pic: 'https://vibirai.ru/image/866020.jpg'
     },
     
     {
      date: '2024-09-12',
      title: 'Турнир по теннису',
      description: "Lorem ipsum dolor sit amet",
      pic: 'https://furman.top/uploads/posts/2022-08/1659987632_7-furman-top-p-nastolnii-tennis-fon-krasivo-7.png'
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Events', null, {});
     
  }
};
