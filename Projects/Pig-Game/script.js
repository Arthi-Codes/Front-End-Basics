'use strict';
let scoreEl0 = (document.getElementById('score--0').textContent = 0);
let scoreEl1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
scoreEl1.textContent = 0;
dice.classList.add('hidden');
