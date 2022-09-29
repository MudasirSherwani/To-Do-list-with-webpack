import moreButton from './images/moreButton.png';
import './index.css';
import todoClass from './module/todolistClass.js';

const AddtotList = document.getElementById('addButton');
const todoTitle = document.getElementById('totdotitle');

//  submit todo list data
AddtotList.addEventListener('click', (e) => {
  e.preventDefault();
  if (todoTitle.value !== '') {
    console.log(todoTitle.value);
    const objtodoClass = new todoClass(todoTitle.value, false, 1);
    objtodoClass.addTodoList();
  }
});

const Todolist = document.getElementById('todolist');
const arrList = JSON.parse(localStorage.getItem('todoListStorage')) || [];
arrList.sort((x, y) => x.index - y.index);

// To Do List Element Creation here
arrList.forEach((elements) => {
  const moreButtonIco = new Image();
  moreButtonIco.classList.add('more-option');
  moreButtonIco.src = moreButton;
  const div = `<div><div class="todo-list-section">
                    <div class="list-elements">
                        <input class="todo-checkbox" type="checkbox"  id="cbid-list" name="cb-name" value="" ${elements.completed ? 'checked' : ''}>
                        <h2 class="title">${elements.description}</h2>
                    </div>
                    <img class="icon" src="${moreButton}" alt="more button">
                </div><hr></div>`;
  const ListElements = Todolist.innerHTML + div;
  Todolist.innerHTML = ListElements;
});