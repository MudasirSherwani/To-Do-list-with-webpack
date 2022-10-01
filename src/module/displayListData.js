import DeleteIcon from '../images/delete.png';
import EditIcon from '../images/edit.png';

const Todolist = document.getElementById('todolist');
// To Do List Element Creation here
const showTodoList = (elements) => {
  const delIcon = new Image();
  const editIcon = new Image();
  delIcon.classList.add('deleteIcon');
  delIcon.src = DeleteIcon;
  editIcon.classList.add('editIcon');
  editIcon.src = EditIcon;
  const div = `<div><div class="todo-list-section">
                    <div class="list-elements">
                        <input class="todo-checkbox" type="checkbox" onclick="ChangeTaskStatus(this.id)"  id="${elements.description}" name="cb-name" value="" ${elements.completed ? 'checked' : ''}>
                        <h2 class="title">${elements.description}</h2>
                    </div>
                    <div class="more-options">
                    <img class="icon edit-button" src="${EditIcon}" alt="Edit button icon">
                    <img class="icon delete-button" src="${DeleteIcon}" alt="Delete button icon">
                </div></div><hr></div>`;
  const ListElements = Todolist.innerHTML + div;
  Todolist.innerHTML = ListElements;
};

export default showTodoList;