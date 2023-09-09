"use strict";

const hamburgerBtn = document.getElementById('hamburgerBtn');
const header = document.getElementById('header');

hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('show');
});