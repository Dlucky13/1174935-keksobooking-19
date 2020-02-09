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
      avatar: 'img/avatars/user0' + id + '.png',
    },
    offer: {
      title: 'Снимите жилье',
      adress: location.x + ', ' + location.y,
      price: getRandomNumber(1, 1000),
      type: getRandomItem(OFFER_TYPES),
      rooms: getRandomNumber(1, 50),
      guests: getRandomNumber(1, 6),
      checkin: getRandomItem(CHECKIN_TIMES),
      checkout: getRandomItem(CHECKOUT_TIMES),
      features: FEATURES.slice(0, getRandomNumber(0, FEATURES.length)),
      description: 'описание',
      photos: PHOTOS.slice(0, getRandomNumber(0, PHOTOS.length)),
    },
    location: location,
  };
};

var generateAdverts = function () {
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

var renderPin = function (advert) {
  var pin = pinTemplate.cloneNode(true);
  var avatarImg = pin.querySelector('img');

  pin.style.left = (advert.location.x - PIN_WIDTH / 2) + 'px';
  pin.style.top = (advert.location.y - PIN_HEIGHT) + 'px';

  avatarImg.src = advert.author.avatar;
  avatarImg.alt = advert.offer.description;

  return pin;
};

var addPins = function (adverts) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < adverts.length; i++) {
    var pin = renderPin(adverts[i]);
    fragment.appendChild(pin);
  }

  mapPins.appendChild(fragment);
};

var adverts = generateAdverts(ADVERT_COUNT);

addPins(adverts);
