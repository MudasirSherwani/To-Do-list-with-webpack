import TodoClass from '../module/todolistClass.js';

// clear complete task button
const ClearCompFunction = () => {
  const ObjtodoClass = new TodoClass();
  const getListData = ObjtodoClass.GetTodoList();
  const UncompleteTask = getListData.filter((item) => item.completed === false);
  UncompleteTask.forEach((item, index) => {
    item.index = index + 1;
  });
  localStorage.setItem('todoListStorage', JSON.stringify(UncompleteTask));
  window.location.reload();
}
export default ClearCompFunction;