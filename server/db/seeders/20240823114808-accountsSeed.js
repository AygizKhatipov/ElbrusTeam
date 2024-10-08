'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Accounts', [
       {
        idUser: 1, 
         photo: 'https://elbrusboot.camp/static/351685d1fcd29b0a83a26c5d8445db57/528bd/babayan.webp',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Генеральный директор.`
       },
       {
        idUser: 2, 
         photo: 'https://i.postimg.cc/y6gCjSbJ/DMN06095-resized-1.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `"Порой и черт боится мыслей, что зреют в женской голове."(с)`
       },
       {
        idUser: 3, 
         photo: 'https://i.postimg.cc/B6jkmdMW/DMN05857-resized.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Пока не придумала, что написать.`
       },
       {
        idUser: 4, 
         photo: 'https://i.postimg.cc/vT6hnyXB/DMN05849-resized.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `"Кааааайффф, клааааасссссс!!!"(с)`
       },
       {
        idUser: 5, 
         photo: 'https://uproger.com/wp-content/uploads/2023/05/image-2023-05-25-174156.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Фея кампуса`
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
         photo: 'https://i.postimg.cc/YCBgXY2b/photo-2024-08-29-16-52-50.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Клубничный слон и вроде бы айтишник, люблю кофе по утрам, а кто его не любит? Еще лакрицу и когда дают оффер.
         А еще, когда Лика рисует рысей на доске до ночи)`
       },
       {
        idUser: 12, 
         photo: 'https://i.postimg.cc/fWmDZ9jG/DSC00235.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Спортсмен. Сон для слабаков.`
       },
       {
        idUser: 13, 
         photo: 'https://i.postimg.cc/Kjqb1nqF/photo-2024-08-29-17-34-11.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Есть любимая собака Бим. Люблю мотоциклы, путешествовать по России и ПИИИВООО!`
       },
       {
        idUser: 14, 
         photo: 'https://i.postimg.cc/85LsfnMG/DSC00951-w.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Люблю спорт и помогать людям.`
       },
       {
        idUser: 15, 
         photo: 'https://i.postimg.cc/NLqyzvt5/photo-2024-08-29-16-11-28.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Люблю готовить, пинать мячи, лежать в гамаке и тайпскрипт`
       },
       {
        idUser: 16, 
         photo: 'https://i.postimg.cc/W3JjdFRJ/DSC00944-w.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Вечная мафия`
       },
       {
        idUser: 17, 
         photo: 'https://i.postimg.cc/1zXyZ7JB/DSC00946-w.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Проплатил "Шерифство". Пьем пиво, живем красиво.`
       },
       {
        idUser: 18, 
         photo: 'https://i.postimg.cc/9QPx1W2w/photo-2024-08-29-17-54-03.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `"Люблю море, волны, паруса, карты и чистое звёздное небо. Путешественник и просто хороший человек"(c)`
       },
       {
        idUser: 19, 
         photo: 'https://elbrusboot.camp/static/e1a0329b2dd53e8ebfc62ddb79da29cf/355ad/krutikova.webp',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `5+ лет в IT рекрутменте, 15+ лет руководящих позиций в HR. 400+ карьерных консультаций по переходу в IT`
       },
       {
        idUser: 20, 
         photo: 'https://elbrusboot.camp/static/f593659ee4fa70586f27d1691025b8b9/89627/kulikova.webp',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `5+ лет опыта в карьерном консультировании в IT, 10+ лет опыта HR в международных компаниях. Эксперт по резюме на английском`
       },
       {
        idUser: 21, 
         photo: 'https://elbrusboot.camp/static/a988569b2a73dc5734ce8e611576d3d0/e2666/kuleshova.webp',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `3+ года опыта в международном IT рекрутинге и карьерном консультировании. Психолог, гештальт-терапевт`
       },
       {
        idUser: 22, 
         photo: 'https://elbrusboot.camp/static/2055a4d7d246997726a9dccf8106cd98/89627/eliseeva.webp',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `3+ года в IT рекрутменте и HR BP. Разработала и внедрила систему грейдов для программистов в международной IT компании`
       },
       {
        idUser: 23, 
         photo: 'https://i.postimg.cc/vZG7Y5RD/DMN05906-resized.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `Покорила всех своим "Брауни")`
       },
       {
        idUser: 24, 
         photo: 'https://i.postimg.cc/ryW55fMK/DMN05841-resized.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `"Я не мафия!"(с)`
       },
       {
        idUser: 25, 
         photo: 'https://i.postimg.cc/15q7nGYH/photo-2024-08-29-17-50-00.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `"Красивая , умная и скромная"(c)`
       },
       {
        idUser: 26, 
         photo: 'https://i.postimg.cc/bvjT242Y/photo-2024-05-02-22-59-04.jpg',
         country: 'Россия',
         city: 'Санкт-Петербург',
         phone: '+7-000-00-00',
         about: `"Люблю котиков"(с)`
       }
       
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Accounts', null, {});
     
  }
};
