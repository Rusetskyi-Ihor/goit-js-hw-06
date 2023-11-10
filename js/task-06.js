const inputBox = document.querySelector('#validation-input');

inputBox.addEventListener('blur', onBlur);

function onBlur(event) {
  const valueLength = event.currentTarget.value.length;

  const dataLength = Number(event.currentTarget.getAttribute('data-length'));

  inputBox.classList.toggle('invalid', valueLength !== dataLength);
  inputBox.classList.toggle('valid', valueLength === dataLength);
}
