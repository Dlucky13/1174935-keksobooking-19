'use strict';

(function () {
  var deactivatePage = function () {
    window.form.disableFormFields();
  };

  var onDomLoad = function () {
    deactivatePage();
  };

  document.addEventListener('DOMContentLoaded', onDomLoad);
})();

// var activatePage = function () {
//   elementCancelHidden(map, 'map--faded');
//   elementCancelHidden(advertForm, 'ad-form--disabled');
//   advertFormFieldsEnable(advertFormFields);

//   addPins(adverts);

//   coords = getMainPinCoords(MainPinSize.HEIGHT);
//   renderAddressInput(coords);
//   guestsNumberLimit(roomNumber);

//   mainPin.removeEventListener('keydown', onEnterKeyPress);
//   document.removeEventListener('mousedown', onMainPinMouseDown);
// };
