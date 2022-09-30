import TodoClass from './module/todolistClass.js';

// Update Task Status 
const TaksStatus =  ChangeTaskStatus =(task_index) => {
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
  export default TaksStatus;