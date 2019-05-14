'use strict';
const uuid = require('uuid');
let chat = Array(10).fill(null);

const text = `
Lorem Ipsum Nedir?
Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
`
for (let i = 0; i < chat.length; i++) {
   chat[i] = {
      UserId: uuid.v4(),
      Text: text,
      createdAt : new Date(),
      updatedAt : new Date(),
   };
}
module.exports = {
   up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Chat',chat, {}),

   down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Chat', null, {}),
};
