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

// addPins(adverts);
var fieldsets = document.querySelectorAll('fieldset');
var formSelects = document.querySelectorAll('select');

var disableFieldsets = function (array) {
  array.forEach (function (item, index, array) {
    item.disabled = true;
  });
};

var pageDeactivate = function() {
  disableFieldsets(fieldsets);
  disableFieldsets(formSelects);
};

var map = document.querySelector('.map');
var formAd = document.querySelector('.ad-form');

var cancelInputDisable = function (array) {
  array.forEach (function (item, index, array) {
    item.disabled = false;
});
};

var cancelElementHidden = function (element, classRemove) {
  element.classList.remove(classRemove);
}

var pageActivate = function () {
  cancelInputDisable(fieldsets);
  cancelInputDisable(formSelects);
  cancelElementHidden(map, 'map--faded');
  cancelElementHidden(formAd, 'ad-form--disabled');
  coords = getMainPinCoords(MainPinSize.HEIGHT);
  renderAddressInput(coords);
  guestsNumberLimit(roomNumber.value);
};

var mainPin = document.querySelector('.map__pin--main');
var MAIN_MOUSE_BUTTON = 1;

var mouseDownMainPinHandler = function(evt) {
  if (evt.which === MAIN_MOUSE_BUTTON) {
    pageActivate();
  };
};

var enterClickMainPinHandler = function(evt) {
  if (evt.key === 'Enter') {
    pageActivate();
  };
};

mainPin.addEventListener ('mousedown', mouseDownMainPinHandler);
mainPin.addEventListener ('keydown', enterClickMainPinHandler);

//передаю координаты метки в input
var pinAdressInput = document.querySelector('#address');

var MainPinSize = {
  WIDTH: 65,
  HEIGHT: 80,
  RADIUS: 32,
};

var getMainPinCoords = function (height) {
  return {
    x: mainPin.offsetLeft + MainPinSize.RADIUS,
    y: mainPin.offsetTop + height
  };
};

var renderAddressInput = function (coords) {
  pinAdressInput.value = coords.x + ', ' + coords.y;
};


var coords = getMainPinCoords(MainPinSize.RADIUS);

renderAddressInput(coords);


//валидация полей
// изменение минимальный стоимости в зависимости от типа жилья
var formSelectType = document.querySelector('#type');
var formPrice = document.querySelector('#price');

var formPriceSwitch = function () {
  switch (formSelectType.value) {
    case ('bungalo'):
      formPrice.placeholder = '0';
      formPrice.min = '0';
      break;
    case ('flat'):
      formPrice.placeholder = '1000';
      formPrice.min = '1000';
      break;
    case ('house'):
      formPrice.placeholder = '5000';
      formPrice.min = '5000';
      break;
    case ('palace'):
      formPrice.placeholder = '10000';
      formPrice.min = '10000';
      break;
  }
};

var onChangeSelectType = formSelectType.addEventListener('change', formPriceSwitch);
//изменение времени пребывания
var selectTimeIn = document.querySelector('#timein');
var selectTimeOut = document.querySelector('#timeout');

var timeOutChanging = function() {
  selectTimeOut.selectedIndex = selectTimeIn.selectedIndex;
};

var onChangeTimeIn = selectTimeIn.addEventListener('change', timeOutChanging);

// изменение кол-ва гостей

var roomNumber = document.querySelector('#room_number');
var guestsNumber = document.querySelector('#capacity');

var guestsNumberLimit = function() {
  switch(roomNumber.value) {
    case ('1'):
      guestsNumber[0].disabled = true;
      guestsNumber[1].disabled = true;
      guestsNumber[3].disabled = true;
      //guestsNumber.max = '1';
      break;
    case ('2'):
      guestsNumber[0].disabled = true;
      guestsNumber[3].disabled = true;
      //guestsNumber.max = '1';
      break;
    case ('3'):
      guestsNumber[3].disabled = true;
      //guestsNumber.max = '3';
      break;
    case ('4'):
      guestsNumber[0].disabled = true;
      guestsNumber[1].disabled = true;
      guestsNumber[2].disabled = true;
      //guestsNumber.max = '0';
      break;
  }
}

var onChangeRoomNumber = roomNumber.addEventListener('change', guestsNumberLimit);


// var setCustomValidity = function(evt) {
//   if(guestsNumber.validity.rangeOverFlow) {
//     guestsNumber.setCustomValidity('Гостей должно быть меньше');
//   }
// };

// guestsNumber.addEventListener('invalid', setCustomValidity);

var formSubmit = document.querySelector('.ad-form');
formSubmit.addEventListener('submit', function (evt) {
  evt.preventDefault();

  console.log('formSend');

});
