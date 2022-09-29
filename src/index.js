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
