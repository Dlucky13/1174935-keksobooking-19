'use strict';

// var MAIN_MOUSE_BUTTON = 0;


// var onMainPinMouseDown = function (evt) {
//   if (evt.button === MAIN_MOUSE_BUTTON) {
//     //activatePage();
//   }
// };

// var onEnterKeyPress = function (evt) {
//   if (evt.key === 'Enter') {
//     //activatePage();
//   }
// };


// advertFormFields // как добавить к ф-ции disableItem этот аргумент

(function () {
  var disableItem = function (item) {
    item.disabled = true;
  };


  window.util = {
    disableItem: disableItem(),
  };
})();

// formSelectType.addEventListener('change', formPriceSwitch);

// selectTimeIn.addEventListener('change', timeOutChanging);

// roomNumber.addEventListener('change', guestsNumberLimit);

// mainPin.addEventListener('mousedown', onMainPinMouseDown);

// mainPin.addEventListener('keydown', onEnterKeyPress);


// var elementCancelHidden = function (element, classRemove) {
//   element.classList.remove(classRemove);
// };


// var formPriceSwitch = function () {
//   switch (formSelectType.value) {
//     case 'bungalo':
//       formPrice.placeholder = 0;
//       formPrice.min = 0;
//       break;
//     case 'flat':
//       formPrice.placeholder = 1000;
//       formPrice.min = 1000;
//       break;
//     case 'house':
//       formPrice.placeholder = 5000;
//       formPrice.min = 5000;
//       break;
//     case 'palace':
//       formPrice.placeholder = 10000;
//       formPrice.min = 10000;
//       break;
//   }
// };

// var timeOutChanging = function () {
//   selectTimeOut.selectedIndex = selectTimeIn.selectedIndex;
// };


// var guestsNumberLimit = function (quantity) {
//   switch (quantity.value) {
//     case '1':
//       guestsNumber[0].disabled = true;
//       guestsNumber[1].disabxled = true;
//       guestsNumber[3].disabled = true;
//       break;
//     case '2':
//       guestsNumber[0].disabled = true;
//       guestsNumber[3].disabled = true;
//       break;
//     case '3':
//       guestsNumber[3].disabled = true;
//       break;
//     case '100':
//       guestsNumber[0].disabled = true;
//       guestsNumber[1].disabled = true;
//       guestsNumber[2].disabled = true;
//       break;
//   }
// };
