'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsshowmodal = document.querySelectorAll('.show-modal');
console.log(btnsshowmodal);
for (let i = 0; i < btnsshowmodal.length; i++)
  console.log(
    btnsshowmodal[i].addEventListener('click', function () {
      // console.log('Button Clicked');
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      //modal.style.display = block;
    })
  );
const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnclosemodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closemodal();
    }
  }
});
