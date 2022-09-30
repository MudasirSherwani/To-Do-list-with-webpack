import showTodoList from './displayListData.js';

let todoList = [];
export default class todoClass {
  constructor(desc, comp) {
    this.description = desc;
    this.completed = comp;
  }

  GetTodoList() {
    let todoListData = JSON.parse(localStorage.getItem('todoListStorage')) || [];
    if (this.description == null) {
      todoListData = JSON.parse(localStorage.getItem('todoListStorage')) || [];
    }
    return todoListData;
  }

  addTodoList() {
    const OldtodoList = this.GetTodoList();
    todoList = {
      description: this.description,
      completed: this.completed,
      index: OldtodoList.length + 1,
    };
    OldtodoList.push(todoList);
    showTodoList(todoList);
    localStorage.setItem('todoListStorage', JSON.stringify(OldtodoList));
  }

  removeTodoList(desc) {
    let OldtodoList = this.GetTodoList();
    OldtodoList = OldtodoList.filter((lst) => lst.description !== desc);
    OldtodoList.forEach((lst, index) => { lst.index = index + 1; });
    localStorage.setItem('todoListStorage', JSON.stringify(OldtodoList));
  }
}