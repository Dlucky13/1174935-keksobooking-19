// 'use strict';

// var mapPins = document.querySelector('.map__pins');
// var pinTemplate = document.querySelector('#pin')
// .content
// .querySelector('.map__pin');

// var renderPin = function (advert) {
//   var pin = pinTemplate.cloneNode(true);
//   var avatarImg = pin.querySelector('img');

//   pin.style.left = (advert.location.x - PIN_WIDTH / 2) + 'px';
//   pin.style.top = (advert.location.y - PIN_HEIGHT) + 'px';

//   avatarImg.src = advert.author.avatar;
//   avatarImg.alt = advert.offer.description;

//   return pin;
// };

// var mainPin = document.querySelector('.map__pin--main');

// var getMainPinCoords = function (height) {
//   return {
//     x: mainPin.offsetLeft + MainPinSize.RADIUS,
//     y: mainPin.offsetTop + height
//   };
// };

// var coords = getMainPinCoords(MainPinSize.RADIUS);
