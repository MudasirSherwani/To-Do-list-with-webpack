import './index.css';
import TodoClass from './module/todolistClass.js';
import showTodoList from './module/displayListData.js';

const AddtotList = document.getElementById('addButton');
const todoTitle = document.getElementById('totdotitle');

//  Add todo list data
AddtotList.addEventListener('click', (e) => {
  e.preventDefault();
  if (todoTitle.value !== '') {
    const ObjtodoClass = new TodoClass(todoTitle.value, false);
    ObjtodoClass.addTodoList();
    todoTitle.value = '';
  }
});

// Display DOM Element Data here
const ObjtodoClass = new TodoClass();
const getListData = ObjtodoClass.GetTodoList();
function reloadButtonFunc() {
  getListData.forEach((item) => {
    showTodoList(item);
  });
}
reloadButtonFunc();

// Delete Button Feature Here
const removeFromList = (getDeleteButton) => {
  if (getDeleteButton.classList.contains('delete-button')) {
    const getTodoIndex = getDeleteButton
      .parentNode.parentNode.firstElementChild.lastElementChild.innerHTML;
    const ObjtodoClass = new TodoClass();
    ObjtodoClass.removeTodoList(getTodoIndex);
    getDeleteButton.parentNode.parentNode.parentNode.remove();
  }
};
const getDeleteButton = (content) => {
  removeFromList(content.target);
};
const getListContent = document.getElementById('todolist');
getListContent.addEventListener('click', getDeleteButton);

// Edit Button Feature Here
const EditFromList = (getEditButton) => {
  if (getEditButton.classList.contains('edit-button')) {
    const getTodoListDesc = getEditButton
      .parentNode.parentNode.firstElementChild.lastElementChild.innerHTML;
    todoTitle.value = getTodoListDesc;
    const ObjtodoClass = new TodoClass();
    ObjtodoClass.removeTodoList(getTodoListDesc);
    getEditButton.parentNode.parentNode.parentNode.remove();
  }
};
const getEditButton = (content) => {
  EditFromList(content.target);
};
const getListContentEdit = document.getElementById('todolist');
getListContentEdit.addEventListener('click', getEditButton);

// Update Task Status 
window. ChangeTaskStatus =(task_index) => {
console.log(task_index);
const ObjtodoClass = new TodoClass();
const getListData = ObjtodoClass.GetTodoList();
getListData.forEach((item) => {
if (item.description === task_index) {
  item.completed = !item.completed;
}
localStorage.setItem('todoListStorage', JSON.stringify(getListData));
});
}