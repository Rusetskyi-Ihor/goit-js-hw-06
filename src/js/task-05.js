const refs = {
  inputBox: document.querySelector('#name-input'),
  outputBox: document.querySelector('#name-output'),
};

refs.inputBox.addEventListener('input', onInput);

function onInput(event) {
  //   console.log(event);
  const inputValue = event.currentTarget.value;

  !inputValue
    ? (refs.outputBox.textContent = 'Anonymous')
    : (refs.outputBox.textContent = inputValue);
}
