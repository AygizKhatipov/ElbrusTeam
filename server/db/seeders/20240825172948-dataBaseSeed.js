'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('DataBases', [ {
      title: 'Август 18, 2024',
      description: 'Топ 10 вопросов на собеседование',
      pic:
        'https://i.postimg.cc/Hs87C8Dy/IMG-8790.jpg',
      
    },
    {
      title: 'Июль 17, 2024',
      description: 'Секреты успешных сданных экзаменов',
      pic:
        'https://i.postimg.cc/J0f0hKVB/IMG-0082.jpg',
      
    },
    {
      title: 'Август 22, 2024',
      description: 'Повтор не приговор? Приемыши и не только',
      pic:
        'https://i.postimg.cc/MGxPh8Lh/IMG-8929.jpg',
      
    },
    {
      title: 'Июль 30, 2024',
      description: 'Беня - Тимлид за делом!',
      pic:
        'https://i.postimg.cc/50GNPptk/IMG-8794.jpg',
      
    },], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('DataBases', null, {});
     
  }
};
