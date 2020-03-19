// 'use strict';

// var generateAdvert = function (id) {
//   var location = {
//     x: getRandomNumber(0, 1200),
//     y: getRandomNumber(130, 630),
//   };
//   return {
//     author: {
//       avatar: 'img/avatars/user0' + id + '.png',
//     },
//     offer: {
//       title: 'Снимите жилье',
//       adress: location.x + ', ' + location.y,
//       price: getRandomNumber(1, 1000),
//       type: getRandomItem(OFFER_TYPES),
//       rooms: getRandomNumber(1, 50),
//       guests: getRandomNumber(1, 6),
//       checkin: getRandomItem(CHECKIN_TIMES),
//       checkout: getRandomItem(CHECKOUT_TIMES),
//       features: FEATURES.slice(0, getRandomNumber(0, FEATURES.length)),
//       description: 'описание',
//       photos: PHOTOS.slice(0, getRandomNumber(0, PHOTOS.length)),
//     },
//     location: location,
//   };
// };

// var generateAdverts = function () {
//   var adverts = [];
//   for (var i = 1; i <= ADVERT_COUNT; i++) {
//     var advert = generateAdvert(i);
//     adverts.push(advert);
//   }
//   return adverts;
// };

// var adverts = generateAdverts(ADVERT_COUNT);
