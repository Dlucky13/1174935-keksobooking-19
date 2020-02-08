'use strict';
var OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalo',
];

var CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

var CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

var ADVERT_COUNT = 8;
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length - 1)];
};

var generateAdvert = function (id) {
  var location = {
    x: getRandomNumber(0, 1200),
    y: getRandomNumber(130, 630),
  };
  return {
    author: {
      avatar: '../img/avatars/user0' + id + '.png',
    },
    offer: {
      'title': 'Снимите жилье',
      'adress': location.x + ', ' + location.y,
      'price': getRandomNumber(1, 30) + ',' + getRandomNumber(1, 1000),
      'type': getRandomItem(OFFER_TYPES),
      'rooms': getRandomNumber(1, 50),
      'guests': getRandomNumber(1, 6),
      'checkin': getRandomItem(CHECKIN_TIMES),
      'checkout': getRandomItem(CHECKOUT_TIMES),
      'features': getRandomNumber(0, FEATURES.length),
      'description': 'описание',
      'photos': getRandomItem(PHOTOS),
    },
    location: location,
  };
};

var generateAdverts = function (ADVERT_COUNT) {
  var adverts = [];
  for (var i = 1; i <= ADVERT_COUNT; i++) {
    var advert = generateAdvert(i);
    adverts.push(advert);
  }
  return adverts;
};

document.querySelector('.map').classList.remove('map--faded');


var mapPins = document.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin')
.content
.querySelector('.map__pin');

var renderPin = function(advert) {
  var pin = pinTemplate.cloneNode(true);
  var avatarImg = pin.querySelector('img');

  pin.style.left = (advert.location.x - PIN_WIDTH / 2) + 'px';
  pin.style.top = (advert.location.y - PIN_HEIGHT) + 'px';

  avatarImg.src = advert.author.avatar;
  avatarImg.alt = advert.offer.description;

  return pin;
};

var addPins = function (adverts) {
  var fragment = document.createDocumentFragment()

  for (var i = 0 ; i < ADVERT_COUNT; i++) {
    var pin = renderPin(adverts[i]);
    fragment.appendChild(pin);
  }

  mapPins.appendChild(fragment);
};

var adverts = generateAdverts(ADVERT_COUNT);

addPins(adverts);


// var offerRent = {
//   "author": {
//     "avatar": 'img/avatars/user0' + id;
//     // строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём.
//     // Например, 01, 02 и т. д. Адреса изображений не повторяются
//     },
//   "offer": {
//     "title": 'Cнимите жилье';
//     "address": строка, адрес предложения. Для простоты пусть пока представляет собой запись вида "{{location.x}}, {{location.y}}", например, "600, 350"
//     "price": число, стоимость
//     "type": //строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo
//     "rooms": число, количество комнат
//     "guests": число, количество гостей, которое можно разместить
//     "checkin": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
//     "checkout": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
//     "features": массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
//     "description": строка с описанием,
//     "photos": массив строк случайной длины, содержащий адреса фотографий
//     },

//   "location": {
//       "x": случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
//       "y": случайное число, координата y метки на карте от 130 до 630.
//     }
// }
