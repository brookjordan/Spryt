import randomString from '../method/randomString.js';

const sprytSheets = {
  init: initialiseFilePicker,
};
const filePickerClassName = randomString(30);
const style = document.createElement('style');
style.innerHTML = `
  .${filePickerClassName} {
    overflow: hidden;
  }

  .${filePickerClassName}__input {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;
style.setAttribute('id', `picker-styles-${filePickerClassName}`);
document.head.insertBefore(style, document.head.firstChild);

export default sprytSheets;

function initialiseFilePicker(pickerClass) {
  const picker_elt       = document.querySelector(`.${pickerClass}`);
  const pickerButton_elt = document.createElement('button');
  const pickerLabel_elt  = document.createElement('span');

  pickerButton_elt.className = `${picker_elt.className} ${filePickerClassName}`;
  pickerButton_elt.addEventListener('click', openPicker);

  picker_elt.className = `${filePickerClassName}__input`;

  pickerLabel_elt.className = `${filePickerClassName}__label`;
  pickerLabel_elt.innerText = picker_elt.getAttribute('title');

  picker_elt.parentNode.insertBefore(pickerButton_elt, picker_elt);
  pickerButton_elt.appendChild(pickerLabel_elt);
  pickerButton_elt.appendChild(picker_elt);


  return {
    elt:    picker_elt,
    button: pickerButton_elt,
  };


  function openPicker() {
    picker_elt.click();
  }
}
