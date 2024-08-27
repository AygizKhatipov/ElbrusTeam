'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Accounts', [
       {
        idUser: 1, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 2, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 3, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 4, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 5, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 6, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 7, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 8, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 9, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 10, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 11, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 12, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 13, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 14, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 15, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 16, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 17, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 18, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 19, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 20, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 21, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 22, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 23, 
         photo: 'https://static17.tgcnt.ru/posts/_0/a2/a2a1e39b36767e5a01356e63b7a85c79.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 24, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 25, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       },
       {
        idUser: 26, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
       }
       
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Accounts', null, {});
     
  }
};
