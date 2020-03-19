'use strict';

(function () {
  var advertFormFields = document.querySelectorAll('fieldset , select');
  var disableFormFields = function (array) {
    array.forEach(window.util.disableItem);
  };

  window.form = {
    disableFormFields: disableFormFields(),
    fields: advertFormFields,
  };
})();


// var map = document.querySelector('.map');
// var advertForm = document.querySelector('.ad-form');

// var advertFormFieldsEnable = function (array) {
//   array.forEach(function (item) {
//     item.disabled = false;
//   });
// };

// var pinAdressInput = document.querySelector('#address');

// var renderAddressInput = function (coords) {
//   pinAdressInput.value = coords.x + ', ' + coords.y;
// };

// renderAddressInput(coords);

// var formSelectType = document.querySelector('#type');
// var formPrice = document.querySelector('#price');

// var selectTimeIn = document.querySelector('#timein');
// var selectTimeOut = document.querySelector('#timeout');

// var roomNumber = document.querySelector('#room_number');
// var guestsNumber = document.querySelector('#capacity');
