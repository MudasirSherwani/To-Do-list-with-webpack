let todoList = [];
let todoListData = JSON.parse(localStorage.getItem('todoListStorage')) || [];

export default class todoClass {
  constructor(desc, compl, indx) {
    this.description=  desc;
    this.completed= compl;
    this.index= indx;
  }

  addTodoList() {
    todoList = { description: this.description, completed: this.completed, index: this.index };
    todoListData.push(todoList);
    localStorage.setItem('todoListStorage', JSON.stringify(todoListData));
  }

}
