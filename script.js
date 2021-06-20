'use strict';
const overlay = document.querySelector('.overlay');
const modalopen = document.querySelector('.modal');
const modalclose = document.querySelector('.close-modal');
const openbuttons = document.querySelectorAll('.show-modal');
console.log(openbuttons);

for (let i = 0; i < openbuttons.length; i++) {
  openbuttons[i].addEventListener('click', function () {
    modalopen.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const modalbtnclose = function () {
  modalopen.classList.add('hidden');
  overlay.classList.add('hidden');
};
modalclose.addEventListener('click', modalbtnclose);
overlay.addEventListener('click', modalbtnclose);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modalopen.classList.contains('hidden')) {
    modalbtnclose();
  }
});
