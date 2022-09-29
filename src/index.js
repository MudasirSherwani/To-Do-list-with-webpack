import './index.css';
import todoClass from './module/todolistClass.js';
import showTodoList from './module/displayListData.js';

const AddtotList = document.getElementById('addButton');
const todoTitle = document.getElementById('totdotitle');

//  Add todo list data
AddtotList.addEventListener('click', (e) => {
  e.preventDefault();
  if (todoTitle.value !== '') {
    const objtodoClass = new todoClass(todoTitle.value);
    objtodoClass.addTodoList();
    todoTitle.value = '';
  }
});

// Display DOM Element Data here 
const objtodoClass = new todoClass();
const getListData = objtodoClass.GetTodoList();
getListData.forEach((item) => {
  showTodoList(item);
});

const removeFromList = (getDeleteButton) => {
  if (getDeleteButton.classList.contains('delete-button')) {
    const getTodoIndex= getDeleteButton.parentNode.parentNode.firstElementChild.lastElementChild.innerHTML;
    const objtodoClass = new todoClass();
    objtodoClass.removeTodoList(getTodoIndex);
    getDeleteButton.parentNode.parentNode.parentNode.remove();
  }
};
const getDeleteButton = (content) => {
  removeFromList(content.target);
};
const getListContent = document.getElementById('todolist')
getListContent.addEventListener('click', getDeleteButton);



