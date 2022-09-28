import moreButton from './images/moreButton.png';
import './index.css';

const Todolist = document.getElementById('todolist');
//  Create Object List of To-Do List
const arrList = [
  {
    description: 'Car fix',
    completed: true,
    index: 0,
  },
  {
    description: 'Football Time',
    completed: true,
    index: 1,
  },
  {
    description: 'Lunch Time',
    completed: false,
    index: 4,
  },
  {
    description: 'Its Coding Time',
    completed: false,
    index: 3,
  },
  {
    description: 'Zoom Meeting',
    completed: false,
    index: 2,
  },
];
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