'use strict';

const change = () => {
    document.querySelector('.list').classList.toggle('invisible');
    document.querySelector('.empty-list').classList.toggle('invisible');
};

document.querySelector('.date-section').addEventListener('click', change);


const adder = (note="ez egy todo", selected, whereTo) => {
    const id = new Date().getTime().toString()
    const todoContent = "ez egy todo";
    const todoTemplateLiteral = `
    <div class="todoContainer todo--appear">
        <label class="todoLabel" for="${id}">
            <input ${selected ? 'checked' : ''} type="checkbox" id="${id}">
            <span class="checkmark"></span>
            ${todoContent}
        </label>
        <button class="todoDelButton delButtonIsHiding">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>` 

    document.querySelector(`.${whereTo}`).insertAdjacentHTML('afterbegin', todoTemplateLiteral);
}

const insertTodoDiv = () => {
    adder('todo1', false, 'pendingItemContainer');
};

document.querySelector('.input-section button').addEventListener('click', insertTodoDiv);



/* 
console.log(document.querySelector('.pendingItemContainer div:first-child'));


const revealButton = (event) => {
    console.log(event.currentTarget);
    event.currentTarget.lastChild.classList.toggle('delButtonIsHiding');
    event.currentTarget.lastChild.classList.toggle('revealTodoDelButton');
}

document.querySelector('.pendingItemContainer div:first-child').addEventListener('click', revealButton);
 */