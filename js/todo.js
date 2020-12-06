'use strict';

const change = () => {
    document.querySelector('.list').classList.toggle('invisible');
    document.querySelector('.empty-list').classList.toggle('invisible');
};

document.querySelector('.input-section button').addEventListener('click', change);

console.log(document.querySelector('.pendingItemContainer div:first-child'));


const revealButton = (event) => {
    console.log(event.currentTarget);
    event.currentTarget.lastChild.classList.toggle('.revealTodoDelButton');
}

document.querySelector('.pendingItemContainer div:first-child').addEventListener('click', revealButton);