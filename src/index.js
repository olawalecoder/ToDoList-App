/* eslint-disable no-unused-vars */

import _ from 'lodash';
import './style.css';
import dotsIcon from './imgDots.svg';

const todoItems = [
  {
    description: 'Take a shower',
    completed: false,
    index: 0,
  },
  {
    description: 'Exerise for 30minutes',
    completed: false,
    index: 1,
  },
  {
    description: 'Buy Groceries',
    completed: false,
    index: 3,
  },
  {
    description: 'Pick kids from school',
    completed: false,
    index: 4,
  },
];

let todoHTML = '';

todoItems.forEach((item) => {
  todoHTML
    += `
      <li class="list-item">
      <div class="checkAndText">
        <input id="${item.completed}" class="checkbox" type="checkbox" />
        <p class="todo-text" id="${item.index}">${item.description}</p>
      </div>
      <img id="dots-image" src="${dotsIcon}" alt="three dots image" />
      </li>
   `;
});

const todoContainer = document.querySelector('.todo-list');

todoContainer.innerHTML = todoHTML;
