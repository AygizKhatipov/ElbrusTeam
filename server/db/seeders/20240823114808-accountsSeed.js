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
         photo: 'https://elbrus-api-uploads.storage.yandexcloud.net/pliskovski_e88f8a9c44.png',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Директор образовательной программы.
         Опыт: 6+ лет в разработке.
         Стек технологий: JavaScript/TypeScript, Node.js, Express, MongoDB/PostgreSQL, Docker, React, Redux, Sass/Scss`
       },
       {
        idUser: 7, 
         photo: 'https://i.postimg.cc/FHzNcn3S/1000005701-8b85bf2be2.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Опыт: 6+ лет в разработке, 8+ лет в образовании.
         Стек технологий: Express/Nest, React, CSS, PostgreSQL/MySQL/MongoDB
         Языки: JavaScript/TypeSctipt, Python, PHP`
       },
       {
        idUser: 8, 
         photo: 'https://i.postimg.cc/FHTbC1Yq/DSC-09405-w-a0ab58b666.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Опыт: 1+ год в преподавании и менторстве.
         Стек технологий: Node.js, Express, React/Next.js, Redux/RTK, Webpack, PostgreSQL, Sequelize/Prisma.
         Языки: JavaScript/TypeSctipt.
         Здесь чтобы учиться новому и передавать эти знания тем, кто пришел за этим же. Поможет открывать новые возможности в себе и в своей жизни`
       },
       {
        idUser: 9, 
         photo: 'https://elbrus-api-uploads.storage.yandexcloud.net/max_a1f8563df6.png',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Опыт: 1+ год в разработке и преподавании. 
         Стек: React/Next.js, Redux/RTK, React Query, MobX, Node.js, Strapi, Express, PostgreSQL, Sequelize.
         Языки: JavaScript/TypeSctipt`
       },
       {
        idUser: 10, 
         photo: 'https://avatars.githubusercontent.com/u/77483722?v=4?s=400',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Опыт: 3+ лет в программировании.
         Любит общаться со студентами, доносить до них свои знания и видеть результаты работы. Любитель мемов и сериалов. Стек технологий: JavaScript/TypeScript, Node.js, PostreSQL, Sequelize, Express, Docker, React.`
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
