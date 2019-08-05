function getColorCode() {
  const color = ((Math.random() * 0xffffff) | 0).toString(16);
  return `#${('000000' + color).slice(-6)}`;
}

const button = document.querySelector('#button');
const text = document.querySelector('.text');
button.addEventListener('click', e => {
  text.style.color = getColorCode();
});
