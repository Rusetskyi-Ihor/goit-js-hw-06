const refs = {
  inputControl: document.querySelector('#font-size-control'),
  outputSpan: document.querySelector('#text'),
};

refs.outputSpan.style.fontSize = refs.inputControl.value + 'px';

refs.inputControl.addEventListener('input', onMove);

function onMove(event) {
  refs.outputSpan.style.fontSize = event.currentTarget.value + 'px';
}
