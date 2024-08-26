'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('DataBases', [{
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor  labore et",
      pic: "https://ucare.timepad.ru/94755349-3020-4096-9bbf-ed47223c1877/poster_event_1255976.jpg",
      userId: 8
     },
     {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
      pic: "https://www.softo-mir.ru/wp-content/uploads/2021/07/original_5d3a15dcea08b6189e1e7176_6038e707af962.jpg",
      userId: 9
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('DataBases', null, {});
     
  }
};
