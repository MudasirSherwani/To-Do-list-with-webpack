import showTodoList from '../module/displayListData.js';

let todoList = [];
export default class todoClass {
  constructor(desc) {
    this.description=  desc;
  }

  GetTodoList() {
    let todoListData = JSON.parse(localStorage.getItem('todoListStorage')) || [];
    return todoListData;
  }

  addTodoList() {
    let OldtodoList = this.GetTodoList();
    todoList = { description: this.description, completed: false, index: OldtodoList.length + 1 };
    OldtodoList.push(todoList);
    showTodoList(todoList);
    localStorage.setItem('todoListStorage', JSON.stringify(OldtodoList));
  }
}
