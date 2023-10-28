let counterValue = 0;
const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  valueSpan: document.querySelector('#value'),
};

refs.incrementBtn.addEventListener('click', incrementValue);

refs.decrementBtn.addEventListener('click', decrementValue);

function incrementValue() {
  counterValue += 1;
  refs.valueSpan.textContent = counterValue;
}

function decrementValue() {
  counterValue -= 1;
  refs.valueSpan.textContent = counterValue;
}
